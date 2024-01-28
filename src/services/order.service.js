const httpStatus = require("http-status");
const bcrypt = require("bcryptjs");
const { sequelize } = require("../models");
const { generateToken } = require("../utils/tokenManagement");
const { abortIf } = require("../utils/responder");
const {axiosPOST} = require('../utils/request')
// const { userDTO } = require("../DTOs/user.dto");
const genericRepo = require("../repository");
const { generateRandomString } = require("../utils/password.utils");


class OrderService {
  async placeOrder({ auth, product_id, quantity, gateway }) {
    const t = await sequelize.transaction();
    try{
      const {user_id} = auth
      const reference = `PFNDR_${generateRandomString(10)}`
      // get User
      const user = await genericRepo.setOptions('User', {
        selectOptions: ['email'],
        condition: {user_id},
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
        },
        transaction: t
      }).create()
      //create order
      const order = await genericRepo.setOptions('Order', {
        data: {
          user_id,
          pharmacy_id: product.pharmacy_id,
          transaction_id: transaction.id,
          quantity
        },
        transaction: t
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
      await t.commit()
      return call?.data
    }catch(error){
      await t.rollback();
      abortIf(error, httpStatus.INTERNAL_SERVER_ERROR, error.message)
    }  
  }

  
// email:
// 'Jarred78@yahoo.com'
// gateway:
// 'flutterwave'
// order_id:
// '503a8dd1-f29a-4d30-a87b-e5a112d4b7e5'
// pharmacy_id:
// '06d244e4-67da-4d27-a15e-e241ec739bd4'
// product_id:
// 'cb004ec8-49b6-4699-bbdb-e2311795058a'
// reference:
// 'PFNDR_n6kFiPpnow'
// service:
// 'PILLFINDR'

  async completeOrder({email, product_id, reference, pharmacy_id, order_id, status}){
    const t = await sequelize.transaction();
    try{
      //get order
      const order = await genericRepo.setOptions('Order', {
        selectOptions: ['quantity'],
        condition: {
          id: order_id
        }
      }).findOne()
      const {quantity} = order
      //update product
      const product = await genericRepo.setOptions('Product', {
        condition: {
          id: product_id
        }
      }).findOne()
      await product.decrement('quantity', {by: quantity, transaction: t})
      //update transactions
      //status Map
      const statusMap = {
        successful: 'success',
        success: 'success',
        failed: 'failed'
      }
      await genericRepo.setOptions('Transaction', {
        condition: {
          reference
        },
        changes: {
          status: statusMap[status]
        },
        transaction: t
      }).update()
      await t.commit()
      return {
        message: 'Transaction Successful'
      }
    }catch(error){
      await t.rollback();
      abortIf(error, httpStatus.INTERNAL_SERVER_ERROR, error.message)
    }
  }
}


module.exports = OrderService
