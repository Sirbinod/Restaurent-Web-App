const express = require("express");
const router = express.Router();

const {signup} = require("../controller/user");

router.get("/signup", (req, res) => {
  res.send("user here");
});
router.post("/signup", signup);

module.exports = router;
