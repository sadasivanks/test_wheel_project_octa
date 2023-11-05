//  implemented by sadasivan

var express = require('express')


var router = express.Router();
var controller = require('../Controller/User_creation')
const middle_ware =  require('../Middlewares/validation')
const booking_validation= require('../Validations/booking_validation')


router.post('/user_creation',middle_ware(booking_validation),controller.user_creation)

module.exports= router;

//function ends here