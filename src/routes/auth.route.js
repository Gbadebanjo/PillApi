const express = require("express");
const AuthController = require("../controller/authentication.controller");
const { verify } = require("../middleware/verifyToken");
const { validateReq } = require("../middleware/validate");
const { login, signUp, otp, reset, courierlogin } = require("../validations/auth.validations");
const { couriersignUp } = require("../controller/authentication.controller");
const router = express.Router();

router.post("/sign-in", validateReq(login), AuthController.signIn);

router.post("/admin/sign-in", validateReq(login), AuthController.adminSignIn);

router.post("/admin/sign-up", AuthController.adminSignUp)

router.post("/sign-up", validateReq(signUp), AuthController.signUp);
/*courier*/
router.post("/courier/sign-in", validateReq(login), AuthController.couriersignIn);
router.post("/courier/sign-up", validateReq(courierlogin), AuthController.couriersignUp);
//otp
router.post("/forgot-password", validateReq(otp), AuthController.forgotpassword);
router.post("/reset-password", validateReq(reset), AuthController.resetpassword);


module.exports = router;
