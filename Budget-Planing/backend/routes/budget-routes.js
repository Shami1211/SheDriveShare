
const express = require("express");
const router = express.Router();
const Budget = require("../model/Budget");
const budgetController = require("../controllers/budget-controller");

router.get("/", );

router.get("/", budgetController.getAllBudgets);
router.post("/",budgetController.addBudget );
router.get("/:id",budgetController.getById );
//router.put("/:id", booksController.updateBook);
//router.delete("/:id", booksController.deleteBook);

module.exports = router;
