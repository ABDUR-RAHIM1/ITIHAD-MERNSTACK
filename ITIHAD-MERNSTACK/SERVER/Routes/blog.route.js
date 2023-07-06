const { getBlogs, addBlogs, deleteBlogs, updateBlog } = require("../Controllers/blog.controller")

const router = require("express").Router()

router.get("/blogs", getBlogs)
router.post("/blogs", addBlogs)
router.put("/blog/:id", updateBlog)
router.delete("/blogs/:id", deleteBlogs)

module.exports  = router