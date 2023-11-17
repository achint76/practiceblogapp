const express = require("express");
const app = express();


const userRoute = require('./user.router');
const blogRoute = require('./blog.router');
app.use('/user', userRoute);
app.use('/blog', blogRoute);
module.exports = app;