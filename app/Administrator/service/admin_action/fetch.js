const User= require('../../../user/Model/User');
const Ilaqa= require('../../Model/Ilaqa');


let get_user = (data) => {
    return User.findOne({...data})
    .then(user =>{
        return user._id;
    }, err=>{
        return err.message;
    })
}

let get_ilaqa = (data) => {
    return Ilaqa.find({...data})
    .then(ilaqa =>{
        return ilaqa;
    }, err=>{
        return err.message;
    })
}



module.exports = { get_user, get_ilaqa}