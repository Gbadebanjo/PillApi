const express = require("express");
const ProfessionalController = require("../controller/professional.controller");
const router = express.Router();
const { verify, authenticate } = require("../middleware/verifyToken");

router.post("/sign-up", ProfessionalController.signUp);

router.post("/sign-in", ProfessionalController.signIn);

router.get("/doctors",  ProfessionalController.getDoctors);

router.get("/dentists", ProfessionalController.getDentists);

router.get("/physiotherapists", ProfessionalController.getPhysiotherapists);

router.patch("/update-details/:id", ProfessionalController.updateDetails);

router.get("/all-professionals", ProfessionalController.getAllProfessionals);

router.get("/:id", ProfessionalController.getProfessionalById);

module.exports = router;