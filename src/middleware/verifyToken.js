const httpStatus = require('http-status');
const { abortIf } = require('../utils/responder');
const { verifyToken } = require('../utils/tokenManagement');
const { abort } = require('process');
const genericRepo = require('../repository');

const verify  = (roles) =>  {
    abortIf(!Array.isArray(roles) || roles.length <= 0, httpStatus.FORBIDDEN, 'Please specify role(s) for user')
    if(roles.length === 1 && roles.includes('*')){
        roles = ['PHARMA-ADMIN', 'PHARMA-SALES', 'CUSTOMER']
    }
    return async (req, res, next) => {
            let { role, pharmacy_id, user_id } = req.auth
            abortIf(!roles && !roles.includes(role[0]), httpStatus.FORBIDDEN, 'You shall not pass!')
            next()
    }
};

const authenticate = async(req, res, next) => {
    const token = req?.headers?.authorization?.split(' ')[1];
    abortIf(!token || token == '', httpStatus.FORBIDDEN, 'You shall not pass');
    const data = verifyToken(token);
    abortIf(!data, httpStatus.FORBIDDEN, 'You shall not pass', next);
    req.auth = {role: data?.role, pharmacy_id: data?.Pharmacy?.pharmacy_id, user_id: data?.user_id};
    next();
}

module.exports = {
    verify, authenticate
};
