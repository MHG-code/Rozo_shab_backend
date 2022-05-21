
const dairy_Model = require('../Model/Dairy');


let fill_dairy = (user_id, body_data) => {
    console.log(body_data.Namaz)
    let Dairy = new dairy_Model({ ...body_data, user:user_id});
   return Dairy.save().then(data=>{
       return data;
   }, err=>{return err.message})
}



module.exports = { fill_dairy}