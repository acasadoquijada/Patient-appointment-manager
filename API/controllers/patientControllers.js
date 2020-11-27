const Patient = require("../models/Patient")

exports.newPet = async (req, res, next) => {
    
    const patient = new Patient(req.body);

    try{
        await patient.save();
        res.json({message: "Pet added correctly"});
    } catch(error) {
        console.log(error);
        next();
    }
}

exports.getPets = async(req, res, next) => {
    try {
        const patientList = await Patient.find({});
        res.json(patientList); 
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getPetById = async (req, res, next) => {

    try {
        const patient = await Patient.findById(req.params.id);
        res.json(patient); 
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.updatePet = async(req, res, next) => {

    try {
        const patient = await Patient.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        });

        res.json(patient);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.deletePet = async(req, res, next) => {

    try {
        const patient = await Patient.findOneAndDelete({_id: req.params.id});
        res.json({message: "Vet deleted corectly"});
    } catch (error) {
        console.log(error);
        next();
    }
}