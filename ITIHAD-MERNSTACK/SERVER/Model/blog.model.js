const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
     title : {
         type : String,
         required : true
     },
     desc : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})

const blog = mongoose.model("blog", blogSchema)
module.exports = blog