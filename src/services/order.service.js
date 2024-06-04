const httpStatus = require("http-status");
const { sequelize } = require("../models");
const { abortIf } = require("../utils/responder");
const genericRepo = require("../repository");
const { generateRandomString } = require("../utils/password.utils");
const FlutterwaveService = require("./flutterwave.service");

class OrderService {
  async placeOrder({ auth, product_id, quantity, gateway, delivery_method, address }) {
    console.log(`Incoming Request: delivery_method: ${delivery_method}, address: ${address}`);

    const t = await sequelize.transaction();
    try {
      const { user_id } = auth;
      const reference = `PFNDR_${generateRandomString(10)}`;

      // get User
      const user = await genericRepo.setOptions('User', {
        selectOptions: ['email'],
        condition: { user_id },
      }).findOne();

      // get Product and Pharmacy
      const product = await genericRepo.setOptions('Product', {
        selectOptions: ['quantity', 'amount', 'pharmacy_id'],
        condition: { id: product_id }
      }).findOne();

      const pharmacy = await genericRepo.setOptions('Pharmacy', {
        selectOptions: ['name'],
        condition: { pharmacy_id: product.pharmacy_id }
      }).findOne();

      abortIf(Number(product.quantity) < quantity, httpStatus.BAD_REQUEST, `${pharmacy.name} does not have enough of the item purchased`);
      const amountToPay = quantity * product.amount;
      
      // create txn
      const transaction = await genericRepo.setOptions('Transaction', {
        data: {
          user_id,
          pharmacy_id: product.pharmacy_id,
          amount: amountToPay,
          gateway,
          reference,
          status: (gateway === 'cash_on_delivery' || gateway === 'transfer') ? 'on_delivery' : 'pending',
          delivery_method
        },
        transaction: t
      }).create();

      // create order
      const orderData = {
        user_id,
        pharmacy_id: product.pharmacy_id,
        transaction_id: transaction.id,
        quantity,
        delivery_method
      };

      if (delivery_method === 'home_delivery') {
        orderData.address = address;
      }

      const order = await genericRepo.setOptions('Order', {
        data: orderData,
        transaction: t
      }).create();

      // Handle Flutterwave Payment
      if (gateway === 'flutterwave') {
        const paymentResponse = await FlutterwaveService.initiatePayment({
          amount: amountToPay,
          email: user.email,
          tx_ref: reference,
        });

        await t.commit();
        return paymentResponse;
      } else {
        // For cash on delivery and transfer, commit transaction directly
        await t.commit();
        return {
          message: 'Order Placed Successfully!',
          order,
          transaction
        };
      }
    } catch (error) {
      await t.rollback();
      abortIf(error, httpStatus.INTERNAL_SERVER_ERROR, error.message);
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
      const {quantity} = order;
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
