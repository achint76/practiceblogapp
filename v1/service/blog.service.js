// const logger = require('../library/logger');
const mongoose = require('mongoose');
const eBlogs = require('../models/blog.models');


const BlogService = {
  createBlog: async (blogs) => {
    try {
      // console.log("< srv-------------->", adminUser);
      let blogObj = await new eBlogs(blogs);
      const createdBlog = await blogObj.save();
      return createdBlog;
    } catch (error) {
    //   logger.error(error);
      throw error;
    }
  },
  
  getAllBlog: async ()=>{
    try{
      const allblogs = await eBlogs.find({});
      return allblogs;
    }catch(error){
       throw error;
    }
  },

  getSingleBlog : async (blog_id)=>{
    try{
      const singleblog = await eBlogs.findOne({_id : new mongoose.Types.ObjectId(blog_id)});
      if(!singleblog){
        return null;
      }
    return singleblog;
    }catch(error){
      throw error;
    }
  },

  deleteBlog: async (_id)=>{
    try {
      const deletedBlog = await blogs.findByIdAndDelete(_id);

      if (!deletedBlog) {
        
        return null;
      }

      return deletedBlog;
    } catch (error) {
      throw error;
    }
  },

};

module.exports = BlogService;