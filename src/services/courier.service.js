const httpStatus = require("http-status");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/tokenManagement");
const { abortIf } = require("../utils/responder");
// const { userDTO } = require("../DTOs/user.dto");
const genericRepo = require("../repository");


class CourierService {
  async getAllUsers(){
    const courier = genericRepo.setOptions('Courier', {
      selectOptions: [
        'email',
        'phone'
      ]
    }).findAll()
    return courier
  }
}


module.exports = CourierService
