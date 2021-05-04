const e = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../models/userSchema");
exports.signup = async (req, res) => {
  const {firstName, lastName, email, phoneNumber, roll, password, cPassword} = req.body;
  try {
   
    const userExit = await User.findOne({email: email});
    
    if (userExit){
      return res.status(422).json({success: false, error:"User already exist"})
    }
    else if (password===cPassword){
        const user = new User({firstName, lastName, email, phoneNumber, roll, password, cPassword})
        await user.save();
        res.status(201).json({success:true, messsage: "user registered successfuly"});
      }else{res.status(402).json({success:false, error:"password not match"});}
    
  } catch (err) {
    res.status(500).send(err);
  }
  
};

exports.signin = async (req, res) =>{
  const {email, password} = req.body;
  try {
    const user = await User.findOne({email: email});
    if (user){
      const isMatch = await bcrypt.compare(password, user.password);
      const token = await user.generateAuthToken();
      console.log(token);
      if (isMatch){
        res.status(201).json({success:true, message:"login successfull"});
      }else{
        res.status(400).json({success:false, error:"invalid password"});
      }

    }else{
      res.status(400).json({success:false, error:"invalid email"});
    }
  } catch (err) {
    
  }
}
