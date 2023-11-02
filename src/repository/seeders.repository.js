const genericRepo = require(".")
const {faker} = require('@faker-js/faker')

const pharma_id1 = faker.string.uuid()
const pharma_id2 = faker.string.uuid()
const user_id1 = faker.string.uuid()
const user_id2 = faker.string.uuid()

class Seed {
    static roles = async() => {
        const arrayOfRoles = [
            {
                role_id: '5d55a6df-0605-4566-83e9-533ed336089f',
                name: 'PHARMA-ADMIN',
                description: 'Pharmacy Admin'
            },
            {
                role_id: '86db46ba-17c5-4d0a-afee-cb21f15957ef',
                name: 'PHARMA-SALES',
                description: 'User who does sales for the pharmacy'
            },
            {
                role_id: '7f9f3062-aa1c-43fe-b375-ec1823bbde8a',
                name: 'PHARMA-SUBSCRIBER',
                description: 'User who subscribed to a pharmacy'
            }
        ]
        const roles = await genericRepo.setOptions('Role', {
            array: arrayOfRoles
        }).bulkCreate()
        return;
    }
    static users = async() => {
        const users = [
            {
                user_id: user_id1,
                firstname: faker.person.firstName(),
                lastname: faker.person.lastName(),
                email: faker.internet.email(),
                phone: faker.phone.number(),
                password: '$2a$10$Bg8dRZwJP5hBR75DgrVQHeeE3TkokdLIUEnYW0Db0E8DnVxf7o0wO'
            },
            {
                user_id: user_id2,
                firstname: faker.person.firstName(),
                lastname: faker.person.lastName(),
                email: faker.internet.email(),
                phone: faker.phone.number(),
                password: '$2a$10$Bg8dRZwJP5hBR75DgrVQHeeE3TkokdLIUEnYW0Db0E8DnVxf7o0wO'
            },
        ]
        const roles = await genericRepo.setOptions('User', {
            array: users
        }).bulkCreate()
        return;
    }
    static pharmacy = async() => {
        const users = [
            {
                pharmacy_id: pharma_id1,
                name: faker.company.name(),
                logo: faker.internet.avatar(),
                email: faker.internet.email(),
            },
            {
                pharmacy_id: pharma_id2,
                name: faker.company.name(),
                logo: faker.internet.avatar(),
                email: faker.internet.email(),
            },
        ]
        const roles = await genericRepo.setOptions('Pharmacy', {
            array: users
        }).bulkCreate()
        return;
    }
    static userPharmaRole = async() => {
        const users = [
            {
                user_id: user_id1,
                firstname: faker.person.firstName(),
                lastname: faker.person.lastName(),
                email: faker.internet.email(),
                phone: faker.phone.number(),
                password: '$2a$10$Bg8dRZwJP5hBR75DgrVQHeeE3TkokdLIUEnYW0Db0E8DnVxf7o0wO',
                role: ['PHARMA-ADMIN'],
                pharmacy_id: pharma_id1,
            },
            {
                user_id: user_id2,
                firstname: faker.person.firstName(),
                lastname: faker.person.lastName(),
                email: faker.internet.email(),
                phone: faker.phone.number(),
                password: '$2a$10$Bg8dRZwJP5hBR75DgrVQHeeE3TkokdLIUEnYW0Db0E8DnVxf7o0wO',
                role: ['PHARMA-SALES'],
                pharmacy_id: pharma_id1,
            },
        ]
        const roles = await genericRepo.setOptions('PharmaAdmin', {
            array: users
        }).bulkCreate()
        return;
    }
    // static User = as
}

module.exports = Seed