const catchAsync = require("../utils/catchAsync");
const PharmacyService = require("../services/pharmacy.service");
const { successResponse, abortIf } = require("../utils/responder");
const httpStatus = require("http-status");
const { paginateOptions } = require("../utils/pagination");

class PharmacyController{
    register = catchAsync(async (req, res, next) => {
        const create = await (new PharmacyService).register({...req.body, user_id: req.auth.user_id});
        return successResponse(res, create);
    });
    profileUser = catchAsync(async (req, res, next) => {
        const create = await (new PharmacyService).profileUser({user: {...req.body}, pharmacy_id: req.auth.pharmacy_id, role: req.auth.role});
        return successResponse(res, create);
    });
    addStock = catchAsync(async (req, res, next) => {
        const create = await (new PharmacyService).addStock({product: req.body, pharmacy_id: req.auth.pharmacy_id});
        return successResponse(res, create);
    });
    listProducts = catchAsync(async (req, res, next) => {
        const paginate = paginateOptions(req)
        const create = await (new PharmacyService).listProducts({ query: req.query, role: req.auth.role, paginateOptions: paginate, auth: req.auth});
        return successResponse(res, create);
    });
    getOneProduct = catchAsync(async (req, res, next) => {
        const create = await (new PharmacyService).getOneProduct({product_id:req.params.product_id, auth: req.auth});
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
