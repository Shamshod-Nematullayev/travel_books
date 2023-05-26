const { Router } = require("express");
const {
  getAllTravels,
  getTravelById,
  addTravel,
} = require("../controllers/travel.controllers");
const router = Router();
const { Travel } = require("../models/Travel.model");

// CRUD
// get all datas
router.get("/", getAllTravels);

// get one data
router.get("/:id", getTravelById);

// add new travel
router.post("/", addTravel);

module.exports = router;
