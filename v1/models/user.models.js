const mongoose = require("mongoose");
const AdminSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        // profile_image: {
        //     type: String,
        //     default: "",
        // },
        gender: {
            type: String
        },
        password: {
            type: String
        },
        // address: [
        //     // {
        //     //     type: String,
        //     //     address_line1: String,
        //     //     address_line2: String,
        //     //     city_villege: String,
        //     //     post_office: String,
        //     //     pincode: String,
        //     //     district: String,
        //     //     state: String,
        //     //     country: String,
        //     //     location: String
        //     // }
        // ],
        // blog_id : {
        //     type : mongoose.Types.ObjectId,
        //     ref : 'blogs',
        //     required : true
        // },
        // is_active: {
        //     type: Boolean,
        //     default: true,
        // },
        // is_deleted: {
        //     type: Boolean,
        //     default: false,
        // },
    },
    { timestamps: true }
);

module.exports = new mongoose.model("user", AdminSchema);
