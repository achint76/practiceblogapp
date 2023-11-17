const express = require("express");
const router = express.Router();
const BlogController = require('../controller/blog.controller');

router.post('/createblog',  BlogController.createBlog);
router.get('/getall-blogs', BlogController.getAllBlog);
router.get('/getsingle-blog/:id', BlogController.getSingleBlog);
router.delete('/delete-blog', BlogController.deleteBlog);
module.exports = router;