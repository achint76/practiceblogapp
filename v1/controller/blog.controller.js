
const BlogService = require('../service/blog.service');
const apiResponse = require('../lib/apiRes');

require('dotenv').config;


const BlogController = {
    createBlog: async (req, res) => {
        try {
           
           let blogs = {
            "blog_name": req.body.blog_name,
            "blog_type": req.body.blog_type,
           };
            const savedBlog = await BlogService.createBlog(blogs);
            // console.log(savedAdmin, "<-----------savedAdmin");

            apiResponse.successResponseWithData(res, "Admin User Created Success!", savedBlog);
        } catch (error) {
            // console.log(error, "<-------------error");
            apiResponse.ErrorResponse(res,"Error creating admin user", error.message);
        }
    },
    getAllBlog: async (req,res) => {
        try{
            const getblog = await BlogService.getAllBlog();
            console.log(getblog,"GETBLOG:::::");
            apiResponse.successResponseWithData(res, "Getting User  Success!!", getblog);
        }catch(error){
            apiResponse.ErrorResponse(res, "Error getting users", error.message);
        }
    },
    getSingleBlog: async (req,res) => {
        try{
            const blogid = req.params.id;
            const singleblog = await BlogService.getSingleBlog(blogid);
            if(singleblog)
            apiResponse.successResponseWithData(res, "Getting single User  Success!!", singleblog);
        }catch(error){
        apiResponse.ErrorResponse(res, "Error getting user", error.message);
        }
    },
    deleteBlog: async (req,res) => {
        try{
           const blogid = req.body._id;
           const deleteblog = await BlogService.deleteBlog(blogid);
           if(deleteblog)
           apiResponse.successResponseWithData(res, "User is deleted", deleteblog);
        }catch(error){
            apiResponse.ErrorResponse(res, "Error deleting users", error.message);
        }
    }
}

    module.exports = BlogController;