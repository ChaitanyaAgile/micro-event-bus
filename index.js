const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.post("/events", (req, res) => {
  const event = req.body;
  axios
    .post("htps://localhost:4000/events", event)
    .catch((err) => console.log(err));
  axios
    .post("htps://localhost:4001/events", event)
    .catch((err) => console.log(err));
  axios
    .post("htps://localhost:4002/events", event)
    .catch((err) => console.log(err));
  return res.send({ status: "ok" });
});

app.listen("4005", () => {
  console.log("E-Bus is listening on 4005");
});
