const httpStatus = require("http-status");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/tokenManagement");
const { abortIf } = require("../utils/responder");
// const { userDTO } = require("../DTOs/user.dto");
const genericRepo = require("../repository");
const { comparePasswords } = require("../utils/password.utils");
const db = require("../models");
const { axiosPOST } = require("../utils/request");

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
    await axiosPOST(
      `${process.env.NOTIFICATION_SERVICE}/notification/send-email`,
      {
        user,
        subject: "Login",
        from: "info@pillfindr.com",
        context: "",
        type: "login",
      },
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GENERIC_SERVICE_TOKEN}`,
        service: "pillfindr",
      }
    );
    return { ...user.toJSON(), token };
  }

  static async adminSignIn({ email, password }) {
    let user = await genericRepo
      .setOptions("PharmaAdmin", {
        condition: { email },
        inclussions: [
          {
            model: db.Pharmacy,
            required: false,
          },
        ],
      })
      .findOne();
    abortIf(!user, httpStatus.BAD_REQUEST, "Invalid Credentials");
    const match = await comparePasswords(password, user.password);
    abortIf(!match, httpStatus.BAD_REQUEST, "Invalid Credentials");
    user = user.toJSON();
    delete user.password;
    //generate Token
    const token = generateToken(user);
    return { user, token };
  }

  static async signUp() {
    const users = genericRepo
      .setOptions("User", {
        selectOptions: ["email", "phone"],
      })
      .findAll();
    return users;
  }
}

module.exports = AuthenticationService;
