const Discount = require("../model/Discount");

const getAllDiscounts = async (req, res, next) => {
  try {
    const discounts = await Discount.find();
    if (!discounts || discounts.length === 0) {
      return res.status(404).json({ message: "No discounts found" });
    }
    return res.status(200).json({ discounts });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const discount = await Discount.findById(id);
    if (!discount) {
      return res.status(404).json({ message: "Discount not found" });
    }
    return res.status(200).json({ discount });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const addDiscount = async (req, res, next) => {
  const { image, name, company, price, discount, start, end, total } = req.body;
  try {
    const newDiscount = new Discount({
      image,
      name,
      company,
      price,
      discount,
      total, // Include total when creating a new Discount instance
      start,
      end,
    });
    await newDiscount.save();
    return res.status(201).json({ discount: newDiscount });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Unable to add discount" });
  }
};

module.exports = { getAllDiscounts, getById, addDiscount };
