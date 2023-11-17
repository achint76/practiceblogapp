const express = require('express')
const cors = require('cors');
const fs = require('fs');
const path = require('path');
// const logger = require('./v1/library/logger');
const mongoose = require('mongoose');
const route = require('./v1/routes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;
const url = process.env.URL || "http://localhost";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB");
    }catch(error){
        throw error;
    }
}

app.use('/api/v1', route);
app.use('/public/image/',express.static(path.resolve('./v1/uploads/')));
app.use('/', (req, res) => {res.send(" server is up and running....")});

app.listen(port, () => {
    connect();
    console.log(` Server listening at ${url}:${port}`);
})