const express = require("express");
const router = express.Router();
const Drive = require("../model/Discount"); // Corrected path
const discountcontoller = require("../controllers/discount-contoller");

// GET all drives
router.get('/', discountcontoller.getAllDiscounts);

// GET drive by ID
router.get('/:id', discountcontoller.getById);

// POST to add a new drive
router.post('/', discountcontoller.addDiscount);

// router.put("/:id", discountcontoller.updateDrive);
// router.delete("/:id", discountcontoller.deleteDrive);

module.exports = router;
