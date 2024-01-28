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

  static completeOrder = catchAsync(async (req, res, next) => {
    const create = await (new OrderService).completeOrder(req.body);
    return successResponse(res, create);
  });
}


module.exports = OrderController
