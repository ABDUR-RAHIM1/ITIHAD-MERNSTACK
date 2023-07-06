const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    roll : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    profession : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})

const Admin = mongoose.model("admin", adminSchema)
module.exports = Admin