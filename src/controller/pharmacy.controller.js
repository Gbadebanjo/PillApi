const catchAsync = require("../utils/catchAsync");
const PharmacyService = require("../services/pharmacy.service");
const { successResponse, abortIf } = require("../utils/responder");
const httpStatus = require("http-status");

class PharmacyController{
    register = catchAsync(async (req, res, next) => {
        console.log(req.body);
        const create = await (new PharmacyService).register(req.body);
        return successResponse(res, create);
    });
    profileUser = catchAsync(async (req, res, next) => {
        console.log(req.body);
        const create = await (new PharmacyService).profileUser(req.body);
        return successResponse(res, create);
    });
    addStock = catchAsync(async (req, res, next) => {
        console.log(req.body);
        const create = await (new PharmacyService).addStock(rew.body);
        return successResponse(res, create);
    });
    listProducts = catchAsync(async (req, res, next) => {
        console.log(req.body);
        const create = await (new PharmacyService).listProducts(req.body);
        return successResponse(res, create);
    });
    getOneProduct = catchAsync(async (req, res, next) => {
        console.log(req.body);
        const create = await (new PharmacyService).getOneProduct();
        return successResponse(res, create);
    });
    uploadProductsCsv = catchAsync(async (req, res, next) => {
        console.log(req.body);
        const create = await (new PharmacyService).uploadProductsCsv();
        return successResponse(res, create);
    });
    getTransactions = catchAsync(async (req, res, next) => {
        console.log(req.body);
        const create = await (new PharmacyService).getTransactions();
        return successResponse(res, create);
    });
    downloadTransactionCsv = catchAsync(async (req, res, next) => {
        console.log(req.body);
        const create = await (new PharmacyService).downloadTransactionCsv();
        return successResponse(res, create);
    });
    downloadProductsCsv = catchAsync(async (req, res, next) => {
        console.log(req.body);
        const create = await (new PharmacyService).downloadProductsCsv();
        return successResponse(res, create);
    });
}


module.exports = PharmacyController
