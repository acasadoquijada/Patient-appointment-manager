const Patient = require("../models/Patient")

exports.newPet = async (req, res, next) => {
    
    const patient = new Patient(req.body);

    try{
        await patient.save();
    } catch(error) {
        console.log(error);
        next();
    }

    res.json({
        message: "Pet added correctly"
    });
}