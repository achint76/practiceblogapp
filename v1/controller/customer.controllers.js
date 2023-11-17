
const UserService = require('../service/user.service');
const apiResponse = require('../lib/apiRes');
const bcrypt = require('bcrypt')

require('dotenv').config;


const AdminController = {
    createAdminUser: async (req, res) => {
        try {
            // let password = await PasswordGenerator.generatePassword(8);
            // let password = req.body.password;
            // const encPassword = await bcrypt.hash(password, 8);
            let adminUser = {
                "name": req.body.name,
                "email": req.body.email,
                "profile_image": req.body.profile_image,
                "gender": req.body.gender,
                "address": req.body.address,
                "blog_id" : req.body.blog_id,
                
            };
            //console.log(blog_id,"BLOG-ID");
            const savedAdmin = await UserService.createAdminUser(adminUser);
            // console.log(savedAdmin, "<-----------savedAdmin");

            apiResponse.successResponseWithData(res, "Admin User Created Success!", savedAdmin);
        } catch (error) {
            // console.log(error, "<-------------error");
            console.log(error);
            apiResponse.ErrorResponse(res,"Error creating admin user", error.message);
        }
    },
    loginuser: async (req,res) => {
        try{
            let login = {
                "email": req.body.email,
                "password": req.body.password,
                 
            };
            const loggedin = await UserService.loginuser(login);
            const dbuser = loggedin[0];
            console.log(dbuser,">>>DBUSEr");
            if(dbuser == undefined)
            apiResponse.notFoundResponse(res, "Not found user");
        //else if()
            apiResponse.successResponseWithData(res,"User logged in", loggedin);

        }catch(error){
            console.log(error,"ERROR");
            apiResponse.ErrorResponse(res,"Error while logging in!!",error.message);
        }
    },
    getAllUser: async (req,res) => {
        try{
            const getuser = await UserService.getAllUser();
            console.log(getuser,"GETUSER:::::");
            apiResponse.successResponseWithData(res, "Getting User  Success!!", getuser);
        }catch(error){
            apiResponse.ErrorResponse(res, "Error getting users", error.message);
        }
    },
    getSingleUser: async (req,res) => {
        try{
            const userid = req.params.id;
            const singleuser = await UserService.getSingleUser(userid);
            console.log("{{{{{{", singleuser,"WSINGLEUSER::::}}}}}}");
            if(singleuser)
            apiResponse.successResponseWithData(res, "Getting single User  Success!!", singleuser);
        }catch(error){
        apiResponse.ErrorResponse(res, "Error getting user", error.message);
        }
    },
    deleteUser: async (req,res) => {
        try{
           const userid = req.body._id;
           const deleteuser = await UserService.deleteUser(userid);
           if(deleteuser)
           apiResponse.successResponseWithData(res, "User is deleted", deleteuser);
        }catch(error){
            apiResponse.ErrorResponse(res, "Error deleting users", error.message);
        }
    }
}

    module.exports = AdminController;