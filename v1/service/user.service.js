// const logger = require('../library/logger');
const mongoose = require('mongoose');
const AdminUser = require('../models/user.models');


const UserService = {
  createAdminUser: async (adminUser) => {
    try {
      // console.log("< srv-------------->", adminUser);
      let adminUserObj = await new AdminUser(adminUser);
      const createdAdmin = await adminUserObj.save();
      return createdAdmin;
    } catch (error) {
    //   logger.error(error);
      throw error;
    }
  },
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
},
  getAllUser: async ()=>{
    try{
      const allusers = await AdminUser.find({});
      return allusers;
    }catch(error){
       throw error;
    }
  },

  // getSingleUser : async (user_id)=>{
  //   try{
  //     const singleuser = await AdminUser.findOne({_id : new mongoose.Types.ObjectId(user_id)});
  //     if(!singleuser){
  //       return null;
  //     }
  //   return singleuser;
  //   }catch(error){
  //     throw error;
  //   }
  // },
  getSingleUser: async (user_id)=> {
    try{
      const singleuser = await AdminUser.aggregate([{
        $match: {
          _id: new mongoose.Types.ObjectId(user_id),
        },
      },{
        $lookup: {
          from: "blogs", // Replace with the actual collection name you want to lookup
          localField: "blog_id",
          foreignField: "_id",
          as: "userblog",
        },
      },
    ]);
    console.log(singleuser,"SSSSSSSs");
    if (!singleuser || singleuser.length === 0) {
      return null;
    }
    return singleuser;
    }catch(error){
      throw error;
    }
  },

  deleteUser: async (_id)=>{
    try {
      const deletedUser = await users.findByIdAndDelete(_id);

      if (!deletedUser) {
        
        return null;
      }

      return deletedUser;
    } catch (error) {
      throw error;
    }
  },

};

module.exports = UserService;



