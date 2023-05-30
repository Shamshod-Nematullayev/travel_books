const { Router } = require("express");
const {
  getAllTravels,
  getTravelById,
  addTravel,
  updateTravel,
  deleteTravel,
} = require("../controllers/travel.controllers");
const router = Router();
const { Travel } = require("../models/Travel.model");

// CRUD

// Method GET
// get all datas
router.get("/", getAllTravels);

// Method GET
// get one data
router.get("/:id", getTravelById);

// Method POST
// add new travel
router.post("/", addTravel);

// Method PUT
// update one travel by id
router.put("/:id", updateTravel);

// Method DELETE
// update one travel by id
router.delete("/:id", deleteTravel);

module.exports = router;
