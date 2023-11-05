// Implemented by sadsivan 

var M_user_creation = require('../Model/M_user_creation')

module.exports={

   //functionality for user creation
    user_creation:async(req,res)=>{

        

            var first_name=req.body.first_name
            var last_name = req.body.last_name
            var vehicle_model_id = req.body.vehicle_model_id
            var started_date = req.body.started_date
            var end_date = req.body.end_date
          
            //functionlity for vehile booking exist or not
            var booking_check = await M_user_creation.user_vehicle_booking_check(started_date,vehicle_model_id) 
            if(booking_check==0)

            {
            var user_info={
                "first_name":first_name,
                "last_name":last_name,
                "vehicle_model_id":vehicle_model_id,
                "started_date":started_date,
                "end_date":end_date
            }

            var result = await M_user_creation.user_data_creation(user_info)

            if(result==1)
            {
                res.json({
                    "msg":"success"
                })
            }

            else

            {
                res.json({
                    "msg":"failed"
                })
            }

        }

        else
        {
            res.json({
                "msg":"car already exist"
            })
        }

        
       
    }
}

//function ends here