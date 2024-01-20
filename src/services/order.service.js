const httpStatus = require("http-status");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/tokenManagement");
const { abortIf } = require("../utils/responder");
const {axiosPOST} = require('../utils/request')
// const { userDTO } = require("../DTOs/user.dto");
const genericRepo = require("../repository");
const { generateRandomString } = require("../utils/password.utils");


class OrderService {
  async placeOrder({ auth, product_id, quantity, gateway }) {
    const {user_id} = auth
    const reference = `PFNDR_${generateRandomString(10)}`
    // get User
    const user = await genericRepo.setOptions('User', {
      selectOptions: ['email'],
      condition: {user_id}
    }).findOne()
    const product = await genericRepo.setOptions('Product', {
      selectOptions: ['quantity', 'amount', 'pharmacy_id'],
      condition: {id: product_id}
    }).findOne()
    const pharmacy = await genericRepo.setOptions('Pharmacy', {
      selectOptions: ['name'],
      condition: {pharmacy_id: product.pharmacy_id}
    }).findOne()
    abortIf(Number(product.quantity) < quantity, httpStatus.BAD_REQUEST, `${pharmacy.name} does not have enough of the item purchased`)
    const amountToPay = quantity * product.amount
    //create txn
    const transaction = await genericRepo.setOptions('Transaction', {
      data: {
        user_id,
        pharmacy_id: product.pharmacy_id,
        amount: amountToPay,
        gateway,
        reference
      }
    }).create()
    //create order
    const order = await genericRepo.setOptions('Order', {
      data: {
        user_id,
        pharmacy_id: product.pharmacy_id,
        transaction_id: transaction.id,
      }
    }).create()

    const call = await axiosPOST(
      `${process.env.NOTIFICATION_SERVICE}/payment/initiate`,
      { 
        amount: amountToPay, 
        currency: 'NGN', 
        meta: {
          email: user.email,
          order_id: order.id,
          reference,
          product_id,
          pharmacy_id: product.pharmacy_id,
        }, 
        reference, 
        gateway, 
        email: user.email 
      },
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GENERIC_SERVICE_TOKEN}`,
        service: "pillfindr",
      }
    );
    return call?.data
  }
}


module.exports = OrderService
