const ilaqa_Model = require("../../Model/Ilaqa");

let ilaqa_update = (id, data) => {
  return ilaqa_Model.findByIdAndUpdate(id, { ...data }).then(
    (data) => {
      return data;
    },
    (err) => {
      return err.message;
    }
  );
};

// let ilaqa_update = async (id,data) => {
//     return ilaqa_Model.findByIdAndUpdate(id, {...data},function(err, data){
//         if(data){
//             console.log(data);
//             return data;
//         }
//         else{
//             err.message;
//         }
//     })

// }

module.exports = { ilaqa_update };
