const Drive = require("../model/Drive");

const getAllDrives = async (req, res, next) => {
  try {
    const drives = await Drive.find();
    if (!drives || drives.length === 0) {
      return res.status(404).json({ message: "No drives found" });
    }
    return res.status(200).json({ drives });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error fetching drives" });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const drive = await Drive.findById(id);
    if (!drive) {
      return res.status(404).json({ message: "No drive found" });
    }
    return res.status(200).json({ drive });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error fetching drive" });
  }
};

const addDrive = async (req, res, next) => {
  const { name, date, start, destination, time, type, number, note } = req.body;
  try {
    const drive = new Drive({
      name,
      date,
      start,
      destination,
      time,
      type,
      number,
      note
    });
    await drive.save();
    return res.status(201).json({ drive });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error adding drive" });
  }
};

module.exports = {
  getAllDrives,
  getById,
  addDrive,
};
