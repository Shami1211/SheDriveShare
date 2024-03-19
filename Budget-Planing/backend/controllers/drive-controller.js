const   Drive = require("../model/Drive");

const getAllDrives = async (req, res, next) => {
  let drives;
  try {
    drives = await Post.find();
  } catch (err) {
    console.log(err);
  }

  if (!drives) {
    return res.status(404).json({ message: "No posts found" });
  }
  return res.status(202).json({ drives });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let drive;
  try {
    drive = await Drive.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!drive) {
    return res.status(404).json({ message: "No drive found" });
  }
  return res.status(200).json({ drive });
};

const addDrive = async (req, res, next) => {
  const { name, date, start, destination, time, type, number, note } = req.body;
  let drive;
  try {
    post = new Post({
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
  } catch (err) {
    console.log(err);
  }

  if (!drive) {
    return res.status(500).json({ message: "Unable to add post" });
  }
  return res.status(201).json({ drive });
};

module.exports = {
  getAllDrives,
  getById,
  addDrive,
};
