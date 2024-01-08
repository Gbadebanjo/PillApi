const catchAsync = require("../utils/catchAsync");
const AuthenticationService = require("../services/authentication.service");
const { successResponse, abortIf } = require("../utils/responder");
const httpStatus = require("http-status");

class AuthenticationController{
  static signUp = catchAsync(async (req, res, next) => {
    const signUp = await AuthenticationService.signUp(req.body);
    return successResponse(res, signUp);
  });

  static couriersignUp = catchAsync(async (req, res, next) => {
    const couriersignUp = await AuthenticationService.couriersignUp(req.body);
    return successResponse(res, couriersignUp);
  });

  static signIn = catchAsync(async (req, res, next) => {
    const login = await AuthenticationService.signIn(req.body);
    return successResponse(res, login);
  });

  static couriersignIn = catchAsync(async (req, res, next) => {
    const courierlogin = await AuthenticationService.couriersignIn(req.body);
    return successResponse(res, courierlogin);
  });

  static adminSignIn = catchAsync(async (req, res, next) => {
    const signUp = await AuthenticationService.adminSignIn(req.body);
    return successResponse(res, signUp);
  });
}


module.exports = AuthenticationController
