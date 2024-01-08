const httpStatus = require("http-status");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/tokenManagement");
const { abortIf } = require("../utils/responder");
// const { userDTO } = require("../DTOs/user.dto");
const genericRepo = require("../repository");
const { comparePasswords, hashPassword } = require("../utils/password.utils");
const db = require("../models");


class AuthenticationService {
  static async signIn({email, password}){
    const user = await genericRepo.setOptions('User', {
      selectOptions: [
        'email',
        'password'
      ],
      condition: {email},
    }).findOne()
    abortIf(!user, httpStatus.BAD_REQUEST, 'Invalid Credentials')
    const match = await comparePasswords(password, user.password)
    abortIf(!match, httpStatus.BAD_REQUEST, 'Invalid Credentials')
    delete user.toJSON().password
    //generate Token
    const token = generateToken(user.toJSON())
    return { user, token }
  }
/********** courier signin*/
  static async couriersignIn({email, password}){
    const courier = await genericRepo.setOptions('Courier', {
      selectOptions: [
        'email',
        'password'
      ],
      condition: {email},
    }).findOne()
    abortIf(!courier, httpStatus.BAD_REQUEST, 'Invalid Credentials')
    const match = await comparePasswords(password, courier.password)
    abortIf(!match, httpStatus.BAD_REQUEST, 'Invalid Credentials')
    delete courier.toJSON().password
    //generate Token
    const token = generateToken(courier.toJSON())
    return { courier, token }
  }
//courier signup
//*********** */
  static async couriersignUp({firstname, lastname, email, licenseplate, companyname, vehiclemodel, password, confirmPassword, phone}){
    const courier = await genericRepo.setOptions('Courier', {
      selectOptions: [
        'firstname',
        'lastname',
        'email',
        'licenseplate',
        'companyname',
        'vehiclemodel',
        'password',
        'phone'
      ],
      condition: {email},
    }).findOne()
    abortIf(courier, httpStatus.BAD_REQUEST, 'courierservice already exist')
    abortIf(password!==confirmPassword, httpStatus.BAD_REQUEST, 'password mismatch')
    const hashedPassword = await hashPassword(password)
    let createCourier = await genericRepo.setOptions('Courier', {
      data: {firstname, lastname, email, licenseplate, companyname, vehiclemodel, phone, password:hashedPassword}
    }).create()
    createCourier = createCourier.toJSON()
    delete createCourier.password
    const token = generateToken(createCourier)
    return {courier:createCourier, token}
  }

  static async adminSignIn({email, password}){
    let user = await genericRepo.setOptions('PharmaAdmin', {
      condition: {email},
      inclussions: [
        {
          model: db.Pharmacy,
          required: false
        }
      ]
    }).findOne()
    abortIf(!user, httpStatus.BAD_REQUEST, 'Invalid Credentials')
    const match = await comparePasswords(password, user.password)
    abortIf(!match, httpStatus.BAD_REQUEST, 'Invalid Credentials')
    user = user.toJSON()
    delete user.password
    //generate Token
    const token = generateToken(user)
    return { user, token }
  }

  static async signUp({firstname, lastname, email, password, confirmPassword, phone}){
    const users = await genericRepo.setOptions('User', {
      selectOptions: [
        'firstname',
        'lastname',
        'email',
        'password',
        'phone'
      ],
      condition: {email},
    }).findOne()
    abortIf(users, httpStatus.BAD_REQUEST, 'user already exist')
    abortIf(password!==confirmPassword, httpStatus.BAD_REQUEST, 'password mismatch')
    const hashedPassword = await hashPassword(password)
    let createUser = await genericRepo.setOptions('User', {
      data: {firstname, lastname, email, phone, password:hashedPassword}
    }).create()
    createUser = createUser.toJSON()
    delete createUser.password
    const token = generateToken(createUser)
    return {user:createUser, token}
  }

}


module.exports = AuthenticationService
