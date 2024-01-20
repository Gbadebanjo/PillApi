const express = require("express");
const OrderController = require("../controller/order.controller");
const { verify, authenticate } = require("../middleware/verifyToken");
const router = express.Router();

router.post("/", authenticate, verify(['CUSTOMER']),  OrderController.placeOrder);

module.exports = router;
