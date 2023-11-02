const catchAsync = require("../utils/catchAsync");
const AuthenticationService = require("../services/authentication.service");
const { successResponse, abortIf } = require("../utils/responder");
const httpStatus = require("http-status");

class AuthenticationController{
  static signUp = catchAsync(async (req, res, next) => {
    const login = await (new AuthenticationService).signUp(req.body);
    return successResponse(res, login);
  });

  static signIn = catchAsync(async (req, res, next) => {
    const signUp = await AuthenticationService.signIn(req.body);
    return successResponse(res, signUp);
  });

  static adminSignIn = catchAsync(async (req, res, next) => {
    const signUp = await AuthenticationService.adminSignIn(req.body);
    return successResponse(res, signUp);
  });
}


module.exports = AuthenticationController
