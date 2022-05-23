let express = require("express");
let router = express.Router();

let auth_service = require("../service/auth_service");
let user_service = require("../service/user_service");

let profile = require("./profile");

let authentication = require("../../Administrator/service/middleware/authentication");

// registration
// mhg.hamza@gmail.com
// 123
router.post("/register", (req, res, next) => {
  auth_service.registration(req.body).then(
    (done) => {
      res.send(done);
    },
    (err) => next(err)
  );
});

router.post("/login", (req, res, next) => {
  auth_service.login(req.body).then(
    (data) => {
      res.send(data);
    },
    // (err) => next(err)
    (err) => res.send(err)
  );
});

router.use(authentication);

router.post("/fill_dairy", (req, res, next) => {
  let user_id = req.user._id;
  // res.send(req.body)
  user_service.fill_dairy(user_id,req.body).then(
    (data) => {
      res.send(data);
    },
    (err) => next(err)
  );
});

router.use("/profile", profile);


module.exports = router;
