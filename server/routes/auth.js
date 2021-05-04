const express = require("express");
const router = express.Router();

const {signup,signin} = require("../controller/auth");

router.get("/signup", (req, res) => {
  res.send("user here");
});
router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
