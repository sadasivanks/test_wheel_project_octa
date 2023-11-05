//  Implemented by sadasivan

var db= require('../util/database')

module.exports={


    //functionality for user creation 

    user_data_creation:async(user_info)=>{

        

            var [query]= await db.query(` insert into tb_user_info  set ?`,[user_info])
           

            if(query.affectedRows>0)
            {
               
                return 1
            }
            else
            {

               
                return 0
            }

        
    },

    // functionality for vehicle booking already exist or not

    user_vehicle_booking_check:async(started_date,vehicle_model_id)=>{

       
            var [query]= await db.query(`select user_id 
            from tb_user_info 
            where started_date=? and vehicle_model_id = ?`,[started_date,vehicle_model_id])

            if(query.length>0)
            {
                return 1
            }
            else
            {
                return 0
            }
       
    }

}
//function ends here