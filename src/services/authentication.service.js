const httpStatus = require("http-status");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/tokenManagement");
const { abortIf } = require("../utils/responder");
// const { userDTO } = require("../DTOs/user.dto");
const genericRepo = require("../repository");
const { comparePasswords } = require("../utils/password.utils");
const db = require("../models");


class AuthenticationService {
  static async signIn({email, password}){
    const user = await genericRepo.setOptions('User', {
      condition: {email},
      inclussions: [
        {
          model: db.Role,
          required: false
        },
        {
          model: db.Pharmacy,
          required: false
        }
      ]
    }).findOne()
    abortIf(!user, httpStatus.BAD_REQUEST, 'Invalid Credentials')
    const match = await comparePasswords(password, user.password)
    abortIf(!match, httpStatus.BAD_REQUEST, 'Invalid Credentials')
    delete user.toJSON().password
    //generate Token
    const token = generateToken(user.toJSON())
    return { user, token }
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

  static async signUp(){
    const users = genericRepo.setOptions('User', {
      selectOptions: [
        'email',
        'phone'
      ]
    }).findAll()
    return users
  }

}


module.exports = AuthenticationService
