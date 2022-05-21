let express = require("express");
let router = express.Router();

let get_service = require("../../service/admin_action/fetch");
let update_service = require("../../service/admin_action/update");
let creat_service = require("../../service/admin_action/creat");

// create circle with ilaqa id
// create halqa with circle id

// update user type
// update user area

// update nazam of areas

// get all related user's and areas
router.get("/", (req, res, next) => {
  res.send("user data here");
});

// we need area id which have this user as a nazim
// router.get("/area_id", (req, res, next) => {
//   res.send("get ares id");
// });

// for create area we need ids of linked area
router.post("/creat_area", (req, res, next) => {
  // res.send(req.user._id)
  creat_service.area_registration(req.user._id, req.body).then(
    (data) => {
      res.send(data);
    },
    (err) => next(err.message)
  );
});

// get user id for update
router.get("/get_user_id", (req, res, next) => {
  get_service.get_user_id(req.body).then(
    (data) => {
      res.send(data);
    },
    (err) => next(err)
  );
});

// for update user which under current user id
router.put("/update_user/:id", (req, res, next) => {
  let user_id = req.params.id;
  let profile_id = req.user._id;
  update_service.user_update_by_nazim(profile_id, user_id, req.body).then(
    (data) => {
      res.send(data);
    },
    (err) => next(err)
  );
});

// update area nazim which under current user id
router.put("/update_area/:id", (req, res, next) => {
  let area_id = req.params.id;
  let profile_id = req.user._id;

  update_service.area_update_by_nazim(profile_id, area_id, req.body).then(
    (data) => {
      res.send(data);
    },
    (err) => next(err)
  );
});

// show all areas which area have curretn user id as a nazim
router.get("/get_areas", (req, res, next) => {
  res.send("get ares id");
});

router.get("/get_users", (req, res, next) => {
  res.send("get ares id");
});

module.exports = router;
