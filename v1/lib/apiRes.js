require('dotenv').config;
// const encrypt = require('../library/encryption');

const ApiResponse = {
    successResponse : (res, msg) => {
        let data = {
            success: true,
            message: msg
        };
        
        return res.status(200).json(data);
    },
    successResponseWithData : (res, msg, data, count = null) => {
        let resData = {
            success: true,
            message: msg,
            data: data
        };

        // if(typeof count != "object") {
        //     resData['count'] = count;
        // }

        return res.status(200).json(resData);
    },    
    ErrorResponse : (res, msg) => {
        let data = {
            success: false,
            message: msg,
            errorCode: "",
        };
        
        return res.status(403).json(data);
    },
    ApplicationErrorResponse : (res, msg) => {
        let data = {
            success: false,
            message: msg,
            errorCode: "",
        };
        
        return res.status(500).json(data);
    },
    notFoundResponse : (res, msg) => {
        let data = {
            success: false,
            message: msg,
            errorCode: "",
        };
        
        return res.status(404).json(data);
    },
    validationErrorWithData :(res, msg, data) => {
        let resData = {
            success: false,
            message: msg,
            errorCode: "",
            data: data
        };
        if(process.env.ENC_ENABLE === 'true') {
            resData = encrypt.encryptData(resData);
        }
        return res.status(400).json(resData);
    },
    unauthorizedResponse : (res, msg) => {
        let data = {
            success: false,
            message: msg,
            errorCode: "",
        };
        
        return res.status(401).json(data);
    },
}
module.exports = ApiResponse;



