const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientControllers");

module.exports = function() {

    router.post("/patients",
        patientController.newPet
    );

    router.get("/patients",
        patientController.getPets 
    )

    router.get("/patients/:id",
        patientController.getPetById 
    )

    router.put("/patients/:id",
        patientController.updatePet
    )

    router.delete("/patients/:id",
        patientController.deletePet
    )

    return router;
}