const Admin = require("../Model/admin.model")
 

const getAdmin = async (req, res)=>{
   try {
        const admin = await Admin.find()
        res.status(200).json({message : "admins", admin})
   } catch (error) {
        res.status(500).json({message :"Internal server Error", error})
   }
}

const createModaretor = async (req, res)=>{
    const {name ,email , password, image, roll , phone, profession, } = req.body
 const findModaretor = await Admin.findOne({email : req.body.email})

   const newModaretor = await Admin({
       name: name,
       email : email,
       password : password,
       image : image,
       roll : roll,
       phone : phone,
       profession : profession
    })
    try {
        if (findModaretor) {
             res.status(400).json({message :"Email Allready Exist"})
        }else{
            const modaretor =await newModaretor.save()
            res.status(201).json({message : "Create Successfully", modaretor})
        }
    } catch (error) {
         res.status(500).json({message :"Internal Server Error", error})
         console.log(error)
    }
}

const loginAdmin = async (req, res) => {
    try {
      const findAdmin = await Admin.findOne({ email: req.body.email });
      if (findAdmin) {
        if (findAdmin.password === req.body.password && findAdmin.roll === req.body.roll) {
          const adminInfo = findAdmin.roll;
          res.status(200).json({ message: "Login Successful", adminInfo });
        } else {
          res.status(440).json({ message: "Incorrect email, password, or roll", adminInfo: "" });
        }
      } else {
        res.status(440).json({ message: "Incorrect email, password, or roll", adminInfo: "" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

const updateAdmin = async(req, res)=>{
   try {
    const updateAdmin = await Admin.findByIdAndUpdate(req.params.id, {
      $set : req.body
    }, {new:true})
    res.status(200).json({message :"Update Successfull", updateAdmin})
   } catch (error) {
     res.status(500).json({message :"Internal Serer Error", error})
   }
}


const deleteAdmin = async (req, res)=>{
    const deleteAdmin = await Admin.findByIdAndDelete(req.params.id)
    try {
        res.status(200).json({message : "Modarator Delete Successfully"})
    } catch (error) {
        res.status(500).json({message :"Internal server Error", error})
    }
}



module.exports = {getAdmin, createModaretor , loginAdmin , updateAdmin, deleteAdmin}