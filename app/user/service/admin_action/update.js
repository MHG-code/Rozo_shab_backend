const get_user_data = require("./fetch");

const ilaqa_Model = require("../../../Administrator/Model/Ilaqa");
const circle_Model = require("../../../Administrator/Model/Circle");
const halka_Model = require("../../../Administrator/Model/Halka");
const user_Model = require("../../Model/User");

let user_update_by_nazim = (profile_id, user_id, data) => {
  return get_user_data.get_area_of_user_as_nazim(profile_id).then(
    (area_data) => {
      if (area_data.ilaqa_name) {
        return user_Model
          .findByIdAndUpdate(user_id, {
            ...data,
            area: { ilaqa: area_data._id },
          })
          .then(
            (data) => {
              return data;
            },
            (err) => {
              return err.message;
            }
          );
      } else if (data.circle_name) {
        return user_Model
          .findByIdAndUpdate(user_id, {
            ...data,
            area: { circle: area_data._id },
          })
          .then(
            (data) => {
              return data;
            },
            (err) => {
              return err.message;
            }
          );
      } else if (data.halka_name) {
        return user_Model
          .findByIdAndUpdate(user_id, {
            ...data,
            area: { halka: area_data._id },
          })
          .then(
            (data) => {
              return data;
            },
            (err) => {
              return err.message;
            }
          );
      }
    },
    (err) => {
      return "soryy you have no any area as a nazim";
    }
  );
};

let area_update_by_nazim = (profile_id, area_id, body_data) => {
  return get_user_data.get_area_of_user_as_nazim(profile_id).then(
    (profile_area_data) => {
      // return profile_area_data;
      return get_user_data
        .get_linked_areas(profile_area_data._id, area_id)
        .then(
          (linked_area_data) => {
            if (linked_area_data.ilaqa_name) {
              console.log("ilaqa");
              return ilaqa_Model.findByIdAndUpdate(area_id, {
                nazm_e_ilaqa: body_data.nazim,
              });
            } else if (linked_area_data.circle_name) {
              console.log("circle");

              return circle_Model.findByIdAndUpdate(area_id, {
                nazm_e_circle: body_data.nazim,
              });
            } else if (linked_area_data.halka_name) {
              console.log("halka");

              return halka_Model.findByIdAndUpdate(area_id, {
                nazm_e_halka: body_data.nazim,
              });
            }
          },
          (err) => {
            return err.message;
          }
        );
    },
    (err) => {
      return "soryy you have no any linked area";
    }
  );
};

module.exports = { user_update_by_nazim, area_update_by_nazim };
