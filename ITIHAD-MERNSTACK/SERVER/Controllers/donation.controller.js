const { json } = require("body-parser")
const Donation = require("../Model/donation.model")

const getDonation = async(req, res)=>{
    const donation = await Donation.find()
    try {
         res.status(200).json({message : "Donation list", donation})
    } catch (error) {
        res.status(500).json({message :"Internal Srever Error", error})
    }
}
// get admin with user info 
const getUniqueDonation = async (req, res)=>{
     const donar = await Donation.find({email : req.body.email})
    try {      
      if (donar && donar.length > 0 && donar[0].name === req.body.name) {
        res.status(200).json({message : "View your donation list", donar})
     }else{
         res.status(400).json({message : "Nothing found"})
     }
    } catch (error) {
         res.status(500).json({message : "Internal Server Error", error})
    }
}


const createDonation = async(req, res)=>{
    const newDonaiton =  await Donation({
        name : req.body.name,
        email : req.body.email,
        amount : req.body.amount
    })
    try {
        const donation = await newDonaiton.save()
        res.status(201).json({message :"Donaiton Added", donation})  
    } catch (error) {
        res.status(500),json({message :"Internal Server Error", error})
    }
}



module.exports ={getDonation, createDonation , getUniqueDonation}