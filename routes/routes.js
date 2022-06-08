const Router = require("express").Router;
const router = Router();
const athleteController = require("../controllers/athletes.controller");

//routes
router.get("/athletes", athleteController.getAthletes);
router.post("/athletes", athleteController.postAthlete);

module.exports = router;
