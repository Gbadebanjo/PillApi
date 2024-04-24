const catchAsync = require("../utils/catchAsync");
const ProfessionalService = require("../services/professional.service");
const { successResponse, abortIf, errorResponse } = require("../utils/responder");
const httpStatus = require("http-status");

const professionalService = new ProfessionalService();

class ProfessionalController {
    static signUp = catchAsync(async (req, res, next) => {
        const signup = await professionalService.signUp(req.body);
        return successResponse(res, signup);
    });

    static signIn = catchAsync(async (req, res, next) => {
        const login = await professionalService.signIn(req.body);
        return successResponse(res, login);
    });

    static getDoctors = catchAsync(async (req, res, next) => {
        const doctors = await professionalService.getDoctors();
        if (doctors.length === 0) {
            return errorResponse(res, 'No Doctors available at this time, kindly check back later', httpStatus.NOT_FOUND);
        }
        return successResponse(res, doctors);
    });

    static getDentists = catchAsync(async (req, res, next) => {
        const dentists = await professionalService.getDentists();
        if (dentists.length === 0) {
            return errorResponse(res, 'No Dentists available at this time, kindly check back later', httpStatus.NOT_FOUND);
        }
        return successResponse(res, dentists);
    });

    static getPhysiotherapists = catchAsync(async (req, res, next) => {
        const physiotherapists = await professionalService.getPhysiotherapists();
        if (physiotherapists.length === 0) {
            return errorResponse(res, 'No Physiotherapists available at this time, kindly check back later', httpStatus.NOT_FOUND);
    }
        return successResponse(res, physiotherapists);
    });

    static updateDetails = catchAsync(async (req, res, next) => {
        const updatedProfessional = await professionalService.updateProfessionalDetails(req.params.id, req.body);
        return successResponse(res, updatedProfessional);
    });

    static  getAllProfessionals = catchAsync(async (req, res, next) => {
        const professionals = await professionalService.getAllProfessionals();
        if (professionals.length === 0) {
            return errorResponse(res, 'No Professionals available at this time, kindly check back later', httpStatus.NOT_FOUND);
        }
        return successResponse(res, professionals);
    });

    static getProfessionalById = catchAsync(async (req, res, next) => {
        const professional = await professionalService.getProfessionalById(req.params.id);
        abortIf(!professional, httpStatus.NOT_FOUND, 'Professional not found');
        return successResponse(res, professional);
    });

}

module.exports = ProfessionalController