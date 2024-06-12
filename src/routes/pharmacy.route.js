const express = require("express");
const PharmacyController = require("../controller/pharmacy.controller");
const { verify, authenticate } = require("../middleware/verifyToken");
const { validateReq } = require("../middleware/validate");
const { login, signUp } = require("../validations/auth.validations");
const router = express.Router();

router.post("/register", authenticate, verify(['PHARMA-ADMIN']), (new PharmacyController()).register);

router.get("/details", authenticate, verify(['PHARMA-ADMIN']), (new PharmacyController()).getPharmacy);

router.put("/update", authenticate, verify(['PHARMA-ADMIN']), (new PharmacyController()).update);

router.post("/profile-user", authenticate, verify(['PHARMA-ADMIN']), (new PharmacyController()).profileUser);

router.post("/add-stock", authenticate, verify(['PHARMA-ADMIN']), (new PharmacyController()).addStock);

router.get("/products", authenticate, verify(['*']), (new PharmacyController()).listProducts);

router.post("/upload-product", authenticate, verify(['*']), (new PharmacyController()).uploadProductsCsv);

router.post("/transactions", (new PharmacyController()).getTransactions);

router.post("/download-transactions", (new PharmacyController()).downloadTransactionCsv);

router.get("/download-products", authenticate, verify(['*']), (new PharmacyController()).downloadProductsCsv);

router.get("/all-products", new PharmacyController().listAllProducts);

router.get("/product/:product_id", new PharmacyController().getOneProduct);

router.get("/nearby",new PharmacyController().findNearbyPharmacies);

module.exports = router;
