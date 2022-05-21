let express = require("express");
let router = express.Router();

let create_service = require("../service/admin_action/create");
let update_service = require("../service/admin_action/update");
let get_service = require("../service/admin_action/fetch");
const { exit } = require("process");

// done create areas ilaqa
// create circle with ilaqa id
// create halqa with circle id

// update user type
// update user area

// done update nazam of areas

router.post("/Ilaqa_registration", (req, res, next) => {
  create_service.ilaqa_registration(req.body).then(
    (data) => {
      res.send(data);
    },
    (err) => next(err)
  );
});

router.get("/get_user", (req, res, next) => {
  get_service.get_user(req.body).then(
    (data) => {
      res.send(data);
    },
    (err) => next(err)
  );
});

router.get("/get_ilaqa", (req, res, next) => {
  get_service.get_ilaqa(req.body).then(
    (data) => {
      res.send(data);
    },
    (err) => next(err)
  );
});

// for update we need ilaqa id and nazim id
router.put("/ilaqa_update/:id", (req, res, next) => {
  //updationn
  let ilaqa_id = req.params.id;
  update_service.ilaqa_update(ilaqa_id, req.body).then(
    (data) => {
      res.send(data);
    },
    (err) => next(err)
  );
});

module.exports = router;
