
const OrderService = require('../services/order.service');

class PaymentController {
  static async completePayment(req, res) {
    const { status, tx_ref, customer, meta } = req.body;
    const { order_id, product_id, pharmacy_id } = meta;

    const orderService = new OrderService();
    try {
      await orderService.completeOrder({
        email: customer.email,
        product_id,
        reference: tx_ref,
        pharmacy_id,
        order_id,
        status
      });
      res.status(200).send('Payment completed');
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = PaymentController;