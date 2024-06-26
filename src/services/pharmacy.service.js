const httpStatus = require("http-status");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/tokenManagement");
const { abortIf } = require("../utils/responder");
const csv = require('csvtojson')
// const { userDTO } = require("../DTOs/user.dto");
const genericRepo = require("../repository");
const xlsx = require('xlsx')
const { hashPassword, generateRandomString } = require("../utils/password.utils");
const { Op, Sequelize } = require("sequelize");
const db = require("../models");
const { haversineDistance } = require("../utils/geolocation");
const { Pharmacy } = require("../models");

class PharmacyService {
    async register(data) {
        const {
            pharmacy: {
                name,
                location,
                email,
                phone
            },
            user_id
        } = data;
        const pharmacy = await genericRepo.setOptions('Pharmacy', {
            data: { name, location, email, phone }
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

    async getPharmacy({ pharmacy_id }) {
        console.log('Fetching pharmacy with ID:', pharmacy_id);
        if (!pharmacy_id) {
            throw new Error('Invalid pharmacyId: pharmacyId cannot be null or undefined');
        }
        const pharmacy = await genericRepo.setOptions('Pharmacy', {
            condition: { pharmacy_id}
        }).findOne();
        return pharmacy;
    }

    async updatePharmacy({ pharmacyId, updateData }) {

        // Find the pharmacy
        const pharmacy = await Pharmacy.findOne({ where: { pharmacy_id: pharmacyId } });

        if (!pharmacy) {
            abortIf(!pharmacy, httpStatus.NOT_FOUND, 'Pharmacy not found');
        }
        // Update the pharmacy
        await Pharmacy.update(updateData, {
            where: { pharmacy_id: pharmacyId }
        });

        // Fetch the updated pharmacy
        const updatedPharmacy = await Pharmacy.findOne({ where: { pharmacy_id: pharmacyId } });

        return updatedPharmacy;
    }

    async profileUser({ user, role, pharmacy_id }) {
        const { email, firstname, lastname, phone } = user
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
    async addStock({ product, pharmacy_id }) {
        const createProduct = await genericRepo.setOptions('Product', {
            data: { ...product, pharmacy_id }
        }).create();
        return createProduct;
    }
    async listProducts({ query, role, paginateOptions, auth }) {
        let { search, pharmacy_id, amount_gt, amount_lt } = query
        if (!amount_lt) amount_lt = 1000000000
        if (!amount_gt) amount_gt = 0
        if (role[0] && role[0] !== 'CUSTOMER') {
            pharmacy_id = auth.pharmacy_id
        }
        let condition = {
            ...(pharmacy_id && { pharmacy_id })
        }
        if (search) {
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
        if (amount_gt) {
            condition = {
                ...condition,
                ...((amount_gt || amount_lt) && {
                    amount: {
                        [Op.gte]: amount_gt,
                        [Op.lte]: amount_lt
                    }
                })
            }
        }
        const list = await genericRepo.setOptions('Product', {
            condition,
            selectOptions: ['id', 'name', 'amount', 'pharmacy_id', 'description', 'image'],
            paginateOptions,
            ...(!pharmacy_id && {
                inclussions: [
                    {
                        model: db.Pharmacy,
                        attributes: [
                            'pharamacy_id',
                            'name',
                            'logo',
                            'phone'
                        ]
                    }
                ]
            })
        }).findAll();
        return list;
    }

    async uploadProductsCsv({ auth, file }) {
        abortIf(!file?.upload_sheet, httpStatus.BAD_REQUEST, 'Please upload a sheet.')
        let { pharmacy_id, user_id, role } = auth
        file = file?.upload_sheet?.tempFilePath
        role = role[0]
        const json = await csv().fromFile(file);
        const arr = []
        for (let item of json) {
            arr.push({
                ...item,
                pharmacy_id
            })
        }
        await genericRepo.setOptions('Product', {
            array: arr
        }).bulkCreate()
        return { message: "Successfully uploaded sheet." }
    }
    async getTransactions(data) {
        const { email, phone, firstname, lastname, role } = data

    }
    async downloadTransactionCsv(data) {
        const { email, phone, firstname, lastname, role } = data
    }
    async downloadProductsCsv({ auth, query }) {
        let { search, amount_gt, amount_lt } = query
        if (!amount_lt) amount_lt = 1000000000
        if (!amount_gt) amount_gt = 0
        let pharmacy_id = auth?.pharmacy_id || '8c7c2f88-1356-45fa-a46d-f3db244a00a9'
        let condition = {
            ...(pharmacy_id && { pharmacy_id })
        }
        if (search) {
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
        if (amount_gt) {
            condition = {
                ...condition,
                ...((amount_gt || amount_lt) && {
                    amount: {
                        [Op.gte]: amount_gt,
                        [Op.lte]: amount_lt
                    }
                })
            }
        }
        const list = await genericRepo.setOptions('Product', {
            condition,
            selectOptions: ['id', 'name', 'amount', 'pharmacy_id', 'description', 'image'],
            ...(!pharmacy_id && {
                inclussions: [
                    {
                        model: db.Pharmacy,
                        attributes: [
                            'pharamacy_id',
                            'name',
                            'logo',
                            'phone'
                        ]
                    }
                ]
            })
        }).findAll();
        const jsonInstances = list.map(list => list.toJSON());
        let resp_work_book = xlsx.utils.book_new();
        let response_sheet = xlsx.utils.json_to_sheet(jsonInstances);
        xlsx.utils.book_append_sheet(resp_work_book, response_sheet, "Products");
        const result = await xlsx.write(resp_work_book, {
            type: "buffer",
            bookType: "xlsx",
            bookSST: false,
        });
        return result;
    }

    async listAllProducts(req, res) {
        try {
            let { search } = req.query;
            // console.log('search:', search);
            let condition = {};
            if (search) {
                condition = {
                    [Op.or]: [
                        { 'name': { [Op.iLike]: `%${search}%` } },
                        { '$Pharmacy.name$': { [Op.iLike]: `%${search}%` } }
                    ]
                };
            }
            const products = await genericRepo.setOptions('Product', {
                condition,
                selectOptions: ['id', 'name', 'amount', 'pharmacy_id', 'description', 'image'],
                inclussions: [
                    {
                        model: db.Pharmacy,
                        attributes: ['pharmacy_id', 'name', 'logo', 'phone', 'location']
                    }
                ]
            }).findAll();
            res.json(products);
        } catch (err) {
            console.error('Error in listAllProducts:', err);
            res.status(500).json({ message: err.message, error: err.toString() });
        }
    }

    async getOneProduct({ product_id }) {
        const product = await genericRepo.setOptions('Product', {
            condition: { id: product_id },
            selectOptions: ['id', 'name', 'amount', 'pharmacy_id', 'description', 'image'],
            inclussions: [
                {
                    model: db.Pharmacy,
                    attributes: [
                        'pharmacy_id',
                        'name',
                        'logo',
                        'phone',
                    ]
                }
            ]
        }).findOne()
        return product
    }

    async findNearbyPharmacies({ latitude, longitude, radius = 10 }) {
        console.log('Searching for pharmacies near:', { latitude, longitude, radius });

        const pharmacies = await db.Pharmacy.findAll({
            attributes: ['pharmacy_id', 'name', 'latitude', 'longitude', 'location'],
            where: {
                latitude: { [Op.ne]: null },
                longitude: { [Op.ne]: null }
            }
        });

        console.log('Fetched pharmacies:', pharmacies);

        const nearbyPharmcies = pharmacies.filter(pharmacy => {
            const { latitude: pharmacyLat, longitude: pharmacyLon } = pharmacy;
            console.log(`Calculating distance between (${latitude}, ${longitude}) and (${pharmacyLat}, ${pharmacyLon})`);
            const distance = haversineDistance(latitude, longitude, pharmacy.latitude, pharmacy.longitude);

            console.log(`Distance to pharmacy ${pharmacy.name} (ID: ${pharmacy.pharmacy_id}): ${distance} km`);

            return distance <= radius;
        });

        return nearbyPharmcies;
    }
}


module.exports = PharmacyService
