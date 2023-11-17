const mongoose = require("mongoose");
const BlogSchema = mongoose.Schema(
    {
        blog_name: {
            type: String,
        },
        blog_type: {
           type: String, 
           enum: ["hindi", "english"],
        }
       
        
    } , 
        
    { timestamps: true }
);

module.exports = new mongoose.model("blogs", BlogSchema);
