// implemented by sadasivan 

//functionality for validation in user creation 

const validation=(schema)=>async(req,res,next)=>{

    const body = req.body 

    try{
        
        await schema.validate(body)
        next();
     
    }
    catch(err)
    {
        console.log(err)
        return res.status(400).json({err})
    }
}


module.exports = validation

//function ends here