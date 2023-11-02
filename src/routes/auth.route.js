const express = require("express");
const AuthController = require("../controller/authentication.controller");
const { verify } = require("../middleware/verifyToken");
const { validateReq } = require("../middleware/validate");
const { login, signUp } = require("../validations/auth.validations");
const router = express.Router();

router.post("/sign-in", validateReq(login), AuthController.signIn);

router.post("/admin/sign-in", validateReq(login), AuthController.adminSignIn);

// router.post("/sign-up", validateReq(signUp), (new UserController()).getAllUser);


module.exports = router;
