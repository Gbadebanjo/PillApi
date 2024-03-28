const httpStatus = require("http-status");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/tokenManagement");
const { axiosPOST } = require("../utils/request");
const { abortIf } = require("../utils/responder");
// const { userDTO } = require("../DTOs/user.dto");
const genericRepo = require("../repository");
const { comparePasswords, hashPassword, generateRandomOTP } = require("../utils/password.utils");
const db = require("../models");
const UserController = require("../controller/user.controller");


class AuthenticationService {
  static async signIn({ email, password }) {
    let user = await genericRepo
      .setOptions("User", {
        condition: { email },
      })
      .findOne();
    abortIf(!user, httpStatus.BAD_REQUEST, "Invalid Credentials");
    const match = await comparePasswords(password, user.password);
    abortIf(!match, httpStatus.BAD_REQUEST, "Invalid Credentials");
    delete user.toJSON().password;
    //generate Token
    const token = generateToken(user.toJSON());
    // await axiosPOST(
    //   `${process.env.NOTIFICATION_SERVICE}/notification/send-email`,
    //   {
    //     user,
    //     subject: "Login",
    //     from: "info@pillfindr.com",
    //     context: "",
    //     type: "login",
    //   },
    //   {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${process.env.GENERIC_SERVICE_TOKEN}`,
    //     service: "pillfindr",
    //   }
    // );
    // return { ...user.toJSON(), token };
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
    const token = generateToken(user);
    return { user, token };
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

  static async adminSignUp({
    user:{
      firstname, 
      lastname, 
      email, 
      password, 
      confirmPassword, 
      phone
    }, 
    pharmacy:{
      emailAddress,
      pharmaName,
      pharmaLogo,
      pharmaPhone,
    }
  }){
    //check for pharmacy
    const pharmacy = await genericRepo.setOptions('Pharmacy', {
      selectOptions: [
        'name',
        'email',
        'phone'
      ],
      condition: {email: emailAddress},
    }).findOne()
    abortIf(pharmacy, httpStatus.BAD_REQUEST, 'Pharmacy already exists')
    let createPharmacy = await genericRepo.setOptions('Pharmacy', {
      data: {name: pharmaName, email: emailAddress, phone: pharmaPhone }
    }).create()
    const users = await genericRepo.setOptions('PharmaAdmin', {
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
    let createUser = await genericRepo.setOptions('PharmaAdmin', {
      data: {firstname, lastname, email, phone, password:hashedPassword, pharmacy_id: createPharmacy.pharmacy_id, role: ['PHARMA-ADMIN']}
    }).create()
    createUser = createUser.toJSON()
    createPharmacy = createPharmacy.toJSON()
    delete createUser.password
    const token = generateToken(createUser)
    return {user:createUser, pharmacy:createPharmacy, token}
  }

  /********** otp*/
  static async forgotpassword({email}){
    //waiting for user/email
    const findUser = await genericRepo.setOptions('User', {
      selectOptions: [
        'email', 'user_id'//
      ],
      condition: {email},
    }).findOne()
    
    abortIf(!findUser, !findUser.user_id, httpStatus.BAD_REQUEST, 'user not found')
    

    // Generate OTP
  const otpcode = generateRandomOTP(5)
  

  let createotp = await genericRepo.setOptions('otp', {
    data: {otp:otpcode, user_id:findUser.user_id}
  }).create()
  return {otp:createotp}
  }

  /**********reset pass*/
  static async resetpassword({otp, newPassword, confirmPassword}){
    const findOtp = await genericRepo.setOptions('otp', {
      selectOptions: [
        'otp',
        'user_id'
      ],
      condition: {otp},
    }).findOne()
    abortIf(!findOtp, httpStatus.BAD_REQUEST, 'otp does not match')
    //inputs new password after otp match
      abortIf(newPassword!==confirmPassword, httpStatus.BAD_REQUEST, 'password mismatch')
      const hashedPassword = await hashPassword(newPassword)
      // User.password = hashPassword
      let updateUser = await genericRepo.setOptions('User', {
        changes: {password: hashedPassword},
        condition: {user_id: findOtp.user_id},
        returning: true
        // data: {password:hashedPassword, user_id:findUser.user_id}
      }).update()
      // updateUser = updateUser.toJSON()
      delete updateUser.newPassword
      return {user:updateUser}
      
  }

  // **** courier signin*/
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
//***** */
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
}
  



module.exports = AuthenticationService;
