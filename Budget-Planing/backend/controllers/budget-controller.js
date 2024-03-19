const Budget = require("../model/Budget");

const getAllBudgets = async (req,res,next) => {
    let budgets;
    try{
        budgets =await Budget.find();
    }catch(err){
        console.log(err)
    }

    if(!budgets){
        return res.status(404).json({message:"no budgets found"})
    }
    return res.status(202).json({budgets})
}

const getById = async (req, res, next) => {
    const id = req.params.id;
    let budget;
    try {
      budget = await Budget.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!budget) {
      return res.status(404).json({ message: "No budget found" });
    }
    return res.status(200).json({ budget });
  };
  
  const addBudget = async (req, res, next) => {
    const { date,name,deposit,exprend,saving } = req.body;
    let budget;
    try {
      budget = new Budget({
        date,
        name,
        deposit,
        exprend,
        saving
      });
      await budget.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!budget) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ budget });
  };

exports.getAllBudgets = getAllBudgets;
exports.addBudget = addBudget;
exports.getById = getById;
//exports.updateBook = updateBook;
//exports.deleteBook = deleteBook;