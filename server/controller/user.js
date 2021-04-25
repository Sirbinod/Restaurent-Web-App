const User = require("../models/userSchema");
exports.signup = async (req, res) => {
  try {
    console.log(req.body);
    const user = new User(req.body);
    const createUser = await user.save();
    res.status(200).send(createuser);
  } catch (err) {
    res.status(500).send(err);
  }
};
