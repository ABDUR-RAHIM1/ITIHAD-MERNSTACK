const express = require("express");
const dotenv = require("dotenv");
dotenv.config()
const cors = require('cors'); 
const useRouter = require("./Routes/user.route");
const adminRouter = require("./Routes/admin.route");
const blogRouter = require("./Routes/blog.route");
const donationRouter = require("./Routes/donation.route");
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

// router middlewere 
app.use("/api", useRouter)
// admin router
app.use('/api/admin', adminRouter)

// blog router 
app.use('/api/blog', blogRouter)

// donation router
app.use("/donation", donationRouter)

// homeroute 
app.get("/", (req, res)=>{
    res.send("HOME ROUTES")
})    

/// error habdler routes 
app.get((req, res, next) => {
   res.send("Routes Not Found")
})


module.exports=app