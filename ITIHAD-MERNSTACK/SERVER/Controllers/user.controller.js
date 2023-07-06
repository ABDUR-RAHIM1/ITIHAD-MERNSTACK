const User = require("../Model/user.model")

const getuser = async (req , res)=>{
    try {
         const users = await User.find() 
         res.status(200).json({message : "Users", users})
    } catch (error) {
        res.status(500).json({message:"Internal server Error"})
    }
}

// cretae user 

const createUser = async(req, res)=>{
    const body = req.body;
    const findEmail = await User.findOne({email : body.email})
    const newUser = await User({
        name : body.name,
        email : body.email,
        password : body.password,
        phone : body.phone,
        profession : body.profession,
        image : body.image

    })
    try {
    if (findEmail) {
        res.status(400).json({message :"Email Allready Exist, try Another Email"})
    }else{
        const user = await newUser.save()
        res.status(201).json({message : "User Created Successfully" ,  user})
    }
    } catch (error) {
        res.status(500).json({message:"Internal server Error", error})
    }
   
}

//  login user 
const loginUser = async(req, res)=>{
   const findUser = await User.findOne({email : req.body.email})
     try {
        if (findUser && findUser.password === req.body.password) {
            res.status(200).json({message :"Login Successfully"})
       }else{
           res.status(400).json({message :"Please Provide Valid Information"})
       }
     } catch (error) {
        res.status(500).json({message:"Internal server Error", error})
     }
}


// update user 
const updateUser = async (req, res)=>{
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id ,{
            $set : req.body
       }, {new :true})
       res.status(200).json({message :"User Update Successfull", updateUser})
    } catch (error) {
        res.status(500).json({message :"Internal Server Error", error})
    }
}


/// delete user 
const deleteUser = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
       if (user) {
        res.status(201).json({ message: "User Deleted Successfully" , user});
       }else{
        res.status(201).json({ message: "User not found"});
       }
    } catch (error) {
      res.status(500).json({ message: "Internal server Error", error });
    }
  };
  
module.exports = {getuser, createUser ,updateUser,deleteUser,loginUser}