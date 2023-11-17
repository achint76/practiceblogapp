const express = require("express");
const router = express.Router();
const CustomerController = require('../controller/customer.controllers');
const SignupController = require('../controller/signup.controller');
const LoginController = require('../controller/login.controller');

router.post('/createUser',  CustomerController.createAdminUser);
router.get('/getall-users', CustomerController.getAllUser);
router.get('/getsingle-user/:id', CustomerController.getSingleUser);
router.delete('/delete-user', CustomerController.deleteUser);

router.post('/register', SignupController.signupuser);
router.post('/log-in', LoginController.loginuser);

module.exports = router;