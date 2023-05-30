const { Travel } = require("../models/Travel.model");

const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find();
    res.status(200).json({
      message: "success",
      travels,
    });
  } catch (err) {
    res.send(err);
  }
};

const getTravelById = async (req, res) => {
  try {
    await Travel.findById(req.params.id)
      .then((travel) => {
        res.status(200).json({
          message: "success",
          travel,
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: "bad request",
          err,
        });
        console.log(err);
      });
  } catch (err) {
    res.send(err);
  }
};
const addTravel = async (req, res) => {
  try {
    const { title, image, descr } = req.body;
    const travel = await Travel.create({
      title,
      image,
      descr,
    });

    res.status(201).json({
      message: "success",
      travel,
    });
  } catch (err) {
    res.send(err);
  }
};

const updateTravel = async (req, res) => {
  try {
    const { title, image, descr } = req.body;
    const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, {
      title,
      image,
      descr,
    });
    res.status(200).json({
      message: "success",
      updatedTravel,
    });
  } catch (err) {
    res.send(err);
  }
};

const deleteTravel = async (req, res) => {
  try {
    await Travel.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getAllTravels,
  getTravelById,
  addTravel,
  updateTravel,
  deleteTravel,
};
