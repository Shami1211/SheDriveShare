const express = require("express");
const router = express.Router();
const Drive = require("../model/Drive"); // Corrected path
const driveController = require("../controllers/drive-controller");

// GET all drives
router.get('/', driveController.getAllDrives);

// GET drive by ID
router.get('/:id', driveController.getById);

// POST to add a new drive
router.post('/', driveController.addDrive);

// router.put("/:id", driveController.updateDrive);
// router.delete("/:id", driveController.deleteDrive);

module.exports = router;
