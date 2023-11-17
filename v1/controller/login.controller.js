const LoginService = require('../service/login.service');
const apiResponse = require('../lib/apiRes');

require('dotenv').config;

const LoginController = {
    loginuser: async (req,res) => {
        try{
            let login = {
                "email": req.body.email,
                "password": req.body.password
            };
            
            const loggedin = await LoginService.loginuser(login);
            const match = await bcrypt.compareSync(password, loggedin.password);
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
    }
}
module.exports = LoginController;
