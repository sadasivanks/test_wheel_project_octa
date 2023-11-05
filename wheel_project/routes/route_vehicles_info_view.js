// Implemented by sadasivan

var express = require('express')
 var router = express.Router();

 var controller = require('../Controller/Vehicles_info_view')

 router.post('/wheel_count_list',controller.view_vehicle_wheels)
 router.post('/vehicle_list_info',controller.vehicles_model_names)
 router.post('/models_list',controller.vehicle_model_info)

 module.exports = router;

 //function ends here