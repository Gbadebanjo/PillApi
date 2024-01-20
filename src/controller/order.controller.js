const catchAsync = require("../utils/catchAsync");
const OrderService = require("../services/order.service");
const { successResponse, abortIf } = require("../utils/responder");
const httpStatus = require("http-status");

class OrderController{
  static placeOrder = catchAsync(async (req, res, next) => {
    const {product_id, quantity, gateway} = req.body
    const create = await (new OrderService).placeOrder({
      auth: req.auth,
      product_id,
      quantity,
      gateway
    });
    return successResponse(res, create);
  });
}


module.exports = OrderController
