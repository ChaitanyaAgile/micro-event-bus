process.on("unhandledRejection", (err) => {
  console.log(err.message);
});
const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;
  try {
    events.push(event);
    axios.post("htps://posts-cluster-service:4000/events", event);
    // axios.post("htps://localhost:4001/events", event);
    // axios.post("htps://localhost:4002/events", event);
    // axios.post("htps://localhost:4003/events", event);
  } catch (err) {
    console.log("ERRROR");
    console.log(err.message);
  }
  return res.send({ status: "ok" });
});

app.get("/events", (req, res) => {
  try {
    return res.send(events);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen("4005", () => {
  console.log("E-Bus is listening on 4005");
});
