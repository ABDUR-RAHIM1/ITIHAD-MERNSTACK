const Blog = require("../Model/blog.model")

const getBlogs =  async(req , res)=>{
    const blog = await Blog.find()
    try {
        if (blog) {
            res.status(200).json({message : "get blogs", blog})
        }else{
            res.status(400).json({message : "cannot get any blog post"})
        }
    } catch (error) {
        res.status(500).json({message :"Internal Server Error", error})
    }
}

const addBlogs =  async(req , res)=>{
    const body = req.body
    const newBlog = await Blog({
         title : body.title,
         desc : body.desc,
         image : body.image
    })
    try {
         const blog = await newBlog.save()
         res.status(201).json({message :"Blog added successfully"})
    } catch (error) {
        res.status(500).json({message : "Internal Server Error", error})
    }
}

const updateBlog = async(req, res)=>{
     try {
        const updateBlog = await Blog.findByIdAndUpdate(req.params.id, {
            $set : req.body
       }, {new :true})
       res.status(200).json({message : "Blog Updated Successfull", updateBlog})
     } catch (error) {
          res.status(500).json({message :"Internal server Error", error})
          console.log(error)
     }
}

const deleteBlogs =  async(req , res)=>{
    const findBlog = await Blog.findById(req.params.id)
    console.log(findBlog)
   try {
    if (findBlog) {
        const deleteBlog = await Blog.findByIdAndDelete(req.params.id)
        res.status(200).json({message :"BLog Deleted"})
    }else{
        res.status(200).json({message:"BLog not Found"})
    }
   } catch (error) {
       res.status(500).json({message : "Internal Server Error", error})
   }
}


module.exports = {getBlogs , addBlogs ,updateBlog, deleteBlogs}