const mongoose = require("mongoose");
const validator = require("validator");
const {v4: uuidv4} = require("uuid");

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
    hashedPassword: {
      type: String,
      required: [true, "please endter password"],
      min: [8, "minmum 8 character"],
    },
    salt: {
      type: String,
    },
    history: {
      type: Array,
      default: [],
    },
  },
  {timestamps: true}
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv4();
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function () {
    return this_password;
  });

userSchema.method = {
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hax");
    } catch (err) {
      return "";
    }
  },
};
const User = mongoose.model("User", userSchema);
module.exports = User;
