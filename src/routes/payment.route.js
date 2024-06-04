const express = require('express');
const router = express.Router();
const PaymentController = require('../controller/payment.controller');

router.post('/payment-complete', PaymentController.completePayment);

module.exports = router;