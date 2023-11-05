// Code Implimented by sadasivan


const yup =require('yup')

const bookingvalidate=yup.object({

    first_name:yup.string().required(),
    last_name:yup.string().required(),
    vehicle_model_id:yup.number().required(),
    started_date:yup.date().required(),
    end_date:yup.date().required()
});

module.exports = bookingvalidate;

//function ends here