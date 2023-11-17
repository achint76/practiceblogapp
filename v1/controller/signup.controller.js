const SignupService = require('../service/signup.service');
const apiResponse = require('../lib/apiRes');
const bcrypt = require('bcrypt')

require('dotenv').config;

const SignupController = {
    signupuser: async (req,res) => {
       try{
        let password = req.body.password;
        const encPassword = await bcrypt.hash(password, 8);
        let register = {
            "name": req.body.name,
            "email": req.body.email,
            "gender": req.body.gender,
            "password": encPassword,
        };
        const signupregister = await SignupService.signupuser(register);
        apiResponse.successResponseWithData(res,"User signed up!!", signupregister);
       }catch(error){
        apiResponse.ErrorResponse(res,"Error in doing signup!!", error.messsage);
       }
    },

}
module.exports = SignupController;
