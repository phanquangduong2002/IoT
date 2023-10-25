"use strict";

const express = require("express");
const cors = require("cors");
const mqtt = require("mqtt");

const app = express();
app.use(cors());
app.use(express.json());

//--------------------ROUTER-------------------------------------
const router = require("./routes");

app.use("/api", router);

//--------------------CONNECT MYSQL-------------------------------------
const connection = require("./db/mysql");

//--------------------CONNECT MQTT-------------------------------------
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");

client.on("connect", () => {
  console.log("Connected to MQTT broker");

  client.subscribe("home/data", (err) => {
    if (!err) {
      console.log("Subscribed to home/data");
    }
  });
});

//--------------------CONNECT SOCKET-------------------------------------
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

//--------------------SOCKET SERVICE-------------------------------------
const {
  getInitialData,
  getInitialDataControl,
  updateDataControl,
} = require("./services/socket.service");

getInitialData(connection, client, io);
getInitialDataControl(connection, client, io);
updateDataControl(connection, client, io);

//--------------------MQTT SERVICE-------------------------------------
const { updateData } = require("./services/mqttClient.service");

updateData(connection, client, io);

module.exports = { server };
