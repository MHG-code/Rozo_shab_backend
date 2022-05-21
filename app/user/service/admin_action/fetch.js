const ilaqa_Model = require("../../../Administrator/Model/Ilaqa");
const circle_Model = require("../../../Administrator/Model/Circle");
const halka_Model = require("../../../Administrator/Model/Halka");
const user_Model = require("../../Model/User");

// need to be change
// let get_area_of_user_as_nazim = (user_id) => {
//   return ilaqa_Model.findOne({ nazm_e_ilaqa: user_id }).then(
//     (data) => {
//       return data;
//     },
//     () => {
//       return circle_Model.findOne({ nazm_e_circle: user_id }).then(
//         (data) => {
//           return data;
//         },
//         () => {
//           return halka_Model.findOne({ nazm_e_halka: user_id }).then(
//             (data) => {
//               return data;
//             },
//             (err) => {
//               return err.message;
//             }
//           );
//         }
//       );
//     }
//   );
// };

let get_area_of_user_as_nazim = (user_id) => {
  return ilaqa_Model.findOne({ nazm_e_ilaqa: user_id }).then(
        (data) => {
          if(data){
            return data;
          }
          else{
            return circle_Model.findOne({ nazm_e_circle: user_id }).then(
                      (data) => {
                        if(data){
                          return data;
                        }
                        else{
                          return halka_Model.findOne({ nazm_e_halka: user_id }).then(
                                        (data) => {
                                          if(data){
                                            return data;
                                          }
                                        }, err =>{return err.message});
                        }
                      });
          }
        });
}

let get_linked_areas = (profile_area_id, area_id) => {
  return ilaqa_Model
    .findOne({ linked: profile_area_id, _id: area_id })
    .then((res) => {
      if (res) {
        return res;
      } else {
        return circle_Model
          .findOne({ linked: profile_area_id, _id: area_id })
          .then((res) => {
            if (res) {
              return res;
            } else {
              return halka_Model
                .findOne({ linked: profile_area_id, _id: area_id })
                .then(
                  (res) => {
                    if (res) {
                      return res;
                    }
                  },
                  (err) => {
                    return err.message;
                  }
                );
            }
          });
      }
    });
};

let get_user_id = (data) => {
  return user_Model.findOne({ ...data }).then(
    (data) => {
      return data._id;
    },
    (err) => {
      return err.message;
    }
  );
};

module.exports = { get_area_of_user_as_nazim, get_user_id, get_linked_areas };
