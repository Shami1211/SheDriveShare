const express = require("express");
const router = express.Router();
const Drive = require("../model/Drive"); // Corrected path
const driveController = require("../controllers/drive-controller");

router.get("/", driveController.getAllDrives);
router.post("/", driveController.addDrive);
router.get("/:id", driveController.getById);
// router.put("/:id", driveController.updateDrive);
// router.delete("/:id", driveController.deleteDrive);

module.exports = router;
