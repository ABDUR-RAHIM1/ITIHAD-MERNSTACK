const  mongoose = require("mongoose")
const donationSchema = mongoose.Schema({
     name : {
         type : String,
         required : true
     },
     email : {
        type : String,
        required : true
    },
    amount : {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})

const Donation = mongoose.model("donation", donationSchema)
module.exports = Donation