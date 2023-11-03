const httpStatus = require("http-status");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/tokenManagement");
const { abortIf } = require("../utils/responder");
// const { userDTO } = require("../DTOs/user.dto");
const genericRepo = require("../repository");
const { hashPassword, generateRandomString } = require("../utils/password.utils");
const { Op, Sequelize } = require("sequelize");
const db = require("../models");


class PharmacyService {
    async register(data){
        const {
            pharmacy:{
                name, 
                location, 
                email, 
                phone
            },
            user_id
        } = data;
        const pharmacy = await genericRepo.setOptions('Pharmacy', {
            data: {name, location, email, phone }
        }).create()
        const userPharmacyRole = await genericRepo.setOptions('UserPharmaRole', {
            condition: {
                role_id: '5d55a6df-0605-4566-83e9-533ed336089f',
                user_id: user_id,
                pharmacy_id: pharmacy.pharmacy_id
            }
        }).create()
        return pharmacy
    }
    async profileUser ({user, role, pharmacy_id}) {
        const {email, firstname, lastname, phone } = user
        const defaultPassword = generateRandomString(7)
        const hashedPassword = await hashPassword(defaultPassword)
        const createUser = await genericRepo.setOptions('PharmaAdmin', {
            data: {
                email, firstname, lastname, phone, password: hashedPassword, role: [user.role], pharmacy_id
            }
        }).create()
        // Send email to profiled user
        return createUser
    }
    async addStock ({product, pharmacy_id}) {
        const createProduct = await genericRepo.setOptions('Product', {
            data: {...product, pharmacy_id}
        }).create();
        return createProduct;
    }
    async listProducts ({query, role, paginateOptions, auth}) {
        let {search, pharmacy_id, amount_gt, amount_lt } = query
        if(!amount_gt) amount_gt = 1000000000
        if(!amount_lt) amount_lt = 0
        if(role[0] && role[0] !== 'CUSTOMER'){
            pharmacy_id = auth.pharmacy_id
        }
        let condition = {
            ...(pharmacy_id && {pharmacy_id})
        }
        if(search){
            condition = {
                ...condition,
                [Op.or]: {
                    name: {
                        [Op.iLike]: `%${search}%`
                    },
                    description: {
                        [Op.iLike]: `%${search}%`
                    }
                }
            }

        }
        if(amount_gt){
            condition = {
                ...condition,
                amount: {
                    [Op.between]: [amount_lt, amount_gt]
                }
            }
        }
        const list = await genericRepo.setOptions('Product', {
            condition,
            selectOptions: ['id', 'name', 'amount', 'pharmacy_id', 'description', 'image'],
            paginateOptions,
            ...(!pharmacy_id && {inclussions: [
                {
                    model: db.Pharmacy,
                    attributes: [
                        'pharamacy_id',
                        'name',
                        'logo',
                        'phone'
                    ]
                }
            ]})
        }).findAll();
        return list;
    }
    async getOneProduct ({product_id, auth}) {
        const product = await genericRepo.setOptions('Product', {
            condition: {id: product_id},
            ...(auth.role[0] === 'CUSTOMER '&&{inclussions: [
                {
                    model: db.Pharmacy,
                    attributes: [
                        'pharamacy_id',
                        'name',
                        'logo',
                        'phone'
                    ]
                }
            ]})
        }).findOne()
        return product
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
