const express = require("express");

const app = express();

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const Johnkidneys = users[0].kidneys;
  const numberOfkidneys = Johnkidneys.length;
  let numberOfHealthykidneys = 0;
  for (let i = 0; i < Johnkidneys.length; i++)
    if (Johnkidneys[i].healthy) {
      numberOfHealthykidneys = numberOfHealthykidneys + 1;
    }
  const numberOfUnHealthykidneys = numberOfkidneys - numberOfHealthykidneys;
  res.json({
    numberOfkidneys,
    numberOfHealthykidneys,
    numberOfUnHealthykidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", function (req, res) {
  const newkidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newkidneys.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = newkidneys;
  res.json({ msg: "done" });
});

app.listen(3000);
