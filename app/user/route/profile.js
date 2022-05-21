let express = require("express");
let router = express.Router();

let service = require("../service/auth_service");
let admin = require("./admin");

router.get("/", (req, res, next) => {
  res.send("user data here");
});

router.use("/administrator", admin);

module.exports = router;
