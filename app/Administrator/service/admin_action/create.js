const ilaqa_Model = require('../../Model/Ilaqa');

let ilaqa_registration = (data) => {

    let Ilaqa = new ilaqa_Model({ ...data});
    return Ilaqa.save()
        .then(ilaqa => {
            return { ilaqa }
        }, err => {
            return err.message
        });
}



module.exports = { ilaqa_registration}