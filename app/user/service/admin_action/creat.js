const get_user_data = require('./fetch');

const ilaqa_Model = require('../../../Administrator/Model/Ilaqa');
const circle_Model = require('../../../Administrator/Model/Circle');
const halka_Model = require('../../../Administrator/Model/Halka');


let area_registration = (user_id, body_data) => {
    
    
    
    return get_user_data.get_area_of_user_as_nazim(user_id).then( data=>{
        if(data.ilaqa_name){
            if(body_data.area_type === "circle" || body_data.area_type === "halqa"){

                if(body_data.area_type === "circle"){
                    var area = new circle_Model({circle_name: body_data.area_name, linked:data._id});
                }
                if(body_data.area_type === "halqa"){
                    var area = new halka_Model({halka_name: body_data.area_name, linked:data._id});
                }
                
                return area.save().then(data=>{
                    return data
                },err=> {return err.message})
            }
        }
        else{
            return 'thisarea type is not under of your level'
        }
        
        // return data
    }, err=> {return err.message} );
}



module.exports = { area_registration}