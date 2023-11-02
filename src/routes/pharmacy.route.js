const express = require("express");
const PharmacyController = require("../controller/pharmacy.controller");
const { verify, authenticate } = require("../middleware/verifyToken");
const { validateReq } = require("../middleware/validate");
const { login, signUp } = require("../validations/auth.validations");
const router = express.Router();

router.post("/register", authenticate, verify(['PHARMA-ADMIN']),  (new PharmacyController()).register);

router.post("/profile-user", authenticate, verify(['PHARMA-ADMIN']),  (new PharmacyController()).profileUser);

router.post("/add-stock",  (new PharmacyController()).addStock);

router.post("/products",  (new PharmacyController()).listProducts);

router.post("/product/:product_id",  (new PharmacyController()).getOneProduct);

router.post("/upload-product",  (new PharmacyController()).uploadProductsCsv);

router.post("/transactions",  (new PharmacyController()).getTransactions);

router.post("/download-transactions", (new PharmacyController()).downloadTransactionCsv);

router.post("/download-products", (new PharmacyController()).downloadProductsCsv);

module.exports = router;
