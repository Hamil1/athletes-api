const mock = require("../database/athletes.json");

const getAthletes = (req, res) => {
  res.json(mock);
};

const postAthlete = (req, res) => {
  const { name, age, sport } = req.body;
  const newAthlete = {
    id: mock.length + 1,
    name,
    age,
    sport,
  };
  mock.push(newAthlete);
  res.send("User created");
};

module.exports = {
  getAthletes,
  postAthlete,
};
