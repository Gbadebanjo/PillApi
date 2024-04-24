const express = require("express");
const ProfessionalController = require("../controller/professional.controller");
const router = express.Router();
const { verify, authenticate } = require("../middleware/verifyToken");

router.post("/sign-up", ProfessionalController.signUp);

router.post("/sign-in", ProfessionalController.signIn);

router.get("/doctors", authenticate, verify(['*']), ProfessionalController.getDoctors);

router.get("/dentists", authenticate, verify(['*']), ProfessionalController.getDentists);

router.get("/physiotherapists", authenticate, verify(['*']), ProfessionalController.getPhysiotherapists);

router.patch("/update-details/:id", ProfessionalController.updateDetails);

router.get("/all-professionals", authenticate, verify(['*']), ProfessionalController.getAllProfessionals);

router.get("/:id", authenticate, verify(['*']), ProfessionalController.getProfessionalById);

module.exports = router;