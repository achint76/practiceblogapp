const mongoose = require('mongoose');
const signup = require('../models/user.models');

const SignupService = {
    signupuser: async (userinfo) => {
        try{
           let userobj = await new signup(userinfo);
           const createduser = await userobj.save();
           return createduser;

        }catch(error){
            throw error;

        }
    }
}
module.exports = SignupService;