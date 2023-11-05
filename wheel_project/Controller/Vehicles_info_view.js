// implimented by sadasivan
var M_vehicles_info_view = require('../Model/M_vehicles_info_view')
module.exports = {

    // functionality for get the list of vehicle wheels

    view_vehicle_wheels: async (req, res) => {

        
            var result = await M_vehicles_info_view.view_vehicle_wheels_list()

            res.json({
                "msg": "success",
                "data": result
            })

        
    },

     
    
    // functionality for  get the vehicles name
      vehicles_model_names:async(req,res)=>{

        
            var wheel_id= req.body.wheel_id

            var [vehicle_list]= await M_vehicles_info_view.vehicle_list_info(wheel_id)

            if(vehicle_list!=0)
            {
                res.json(
                    {
                        "msg":"success",
                        "data":vehicle_list
                    }
                )
            }
            else
            {
                res.json({
                    "msg":"no vehicles to show"
                })
            }
       
    },




    // functionality for get the vehicle models base their types 
    vehicle_model_info:async(req,res)=>{

       
            var model_id = req.body.model_id
            var [vehicle_models] = await M_vehicles_info_view.vehicle_model_name(model_id)

            if(vehicle_models!=0)
            {
                res.json({
                    "msg":"success",
                    "data":vehicle_models
                })
            }
            else
            {
                res.json({
    
                    "msg":"no models"
                })
            }
       
    }
    
}
//function ends here