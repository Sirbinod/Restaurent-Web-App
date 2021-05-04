const mongoose = require("mongoose");
const validator = require("validator");
const {v4: uuidv4} = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "please enter your first name"],
    },
    lastName: {
      type: String,
      required: [true, "please enter your last name"],
    },
    email: {
      type: String,
      required: [true, "please enter email id"],
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("invalid email");
        }
      },
    },
    phoneNumber: {
      type: Number,
      required: [true, "please enter your phone number"],
      min: 10,
    },
    roll: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
    password: {
      type: String,
      required: [true, "please endter password"],
      min: [8, "minmum 8 character"],
    },
    cPassword:{
      type: String,
      required: [true, "please endter password"],
      min: [8, "minmum 8 character"]
    },
    tokens: [
      {
        token:{
          type: String,
          required: true
        }
      }
    ]
  },
  {timestamps: true}
);


userSchema.pre("save", async function(next){
  if (this.isModified("password")){
      this.password = await bcrypt.hash(this.password, 10);
      this.cPassword = await bcrypt.hash(this.cPassword, 10);

  }
  next();
  
})

userSchema.methods.generateAuthToken = async function(){ 
  try{
    const token = jwt.sign({_id:this._id},process.env.SEC_KEY)
    this.tokens = this.tokens.concat({token:token})
    await this.save()
    return token
  }catch(err){
    console.log(err);
  }

  }


const User = mongoose.model("User", userSchema);
module.exports = User;
