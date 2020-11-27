const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientControllers");

module.exports = function() {

    router.post("/patients",
        patientController.newPet
    );

    return router;
}