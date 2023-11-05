// Implimented by sadasivan

const db = require('../util/database')

module.exports={

    // functionality for get the list of vehicle wheels 
     
    view_vehicle_wheels_list:async()=>{
     

            var [query]= await db.query(`select wheel_id,no_of_wheels 
            from tb_vehicle_wheels`)

            return query
    
        },
       


    // functionality for  get the vehicles name
    vehicle_list_info:async(wheel_id)=>{
        

            var [query]= await db.query(`select id,
            vehicles_model_name,
            wheel_id
            from tb_vehicles_name where wheel_id =?`,wheel_id)

            if(query.length>0)
            {
                return query
            }

            else{

                return 0
            }
      
    },


    // functionality for get the vehicle models base their types 
    vehicle_model_name:async(model_id)=> {
       

            var [query] = await db.query(` select 
            id,
            model_name,
            vehicle_id
            from tb_vehicle_models_name
            where vehicle_id=?`,model_id)

            if(query.length>0)
            {
                return query
            }
        
    }
}


//function ends here