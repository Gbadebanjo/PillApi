const httpStatus = require("http-status");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/tokenManagement");
const { abortIf } = require("../utils/responder");
// const { userDTO } = require("../DTOs/user.dto");
const genericRepo = require("../repository");


class PharmacyService {
    async register(data){
        const {name, location, password, confirmPassword, email, phone} = data;
        return users
    }
    async profileUser (data) {
        const {email, phone, firstname, lastname, role} = data

    }
    async addStock (data) {
        const {email, phone, firstname, lastname, role} = data
        
    }
    async listProducts (data) {
        const {email, phone, firstname, lastname, role} = data
        
    }
    async getOneProduct (product_id) {
        const {email, phone, firstname, lastname, role} = data
        
    }
    async uploadProductsCsv (data) {
        const {email, phone, firstname, lastname, role} = data
        
    }
    async getTransactions (data) {
        const {email, phone, firstname, lastname, role} = data
        
    }
    async downloadTransactionCsv (data) {
        const {email, phone, firstname, lastname, role} = data
        
    }
    async downloadProductsCsv (data) {
        const {email, phone, firstname, lastname, role} = data
        
    }
}


module.exports = PharmacyService
