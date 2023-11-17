const mongoose = require('mongoose');
const login = require('../models/user.models');

const LoginService = {
    loginuser: async (signindata)=>{
        try{
            console.log(signindata,"SIGNINDATA");
            const userlogin = await login.aggregate([{
                $match: {
                  email: signindata.email,
                  password: signindata.password
                },
            //   },{
            //     $lookup: {
            //       from: "users", // Replace with the actual collection name you want to lookup
            //       localField: "blog_id",
            //       foreignField: "_id",
            //       as: "userblog",
            //     },
            //   },
        }]);
            console.log(userlogin,"SSSSSSSsuserlogin");
            if (!userlogin || userlogin.length === 0) {
              return null;
            }
            return userlogin;
        }catch(error){
          throw error;

    }
}
}
module.exports = LoginService;