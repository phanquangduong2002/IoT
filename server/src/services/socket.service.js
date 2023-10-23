"use strict";
const { format } = require("date-fns");

const getInitialData = (connection, client, io) => {
  io.on("connection", (socket) => {
    const dataSelected = "SELECT * FROM `sensor_data`";
    connection.query(dataSelected, function (err, result) {
      if (err) throw err;
      var fullData = [];
      result.forEach(function (value) {
        const inputDate = new Date(value.Time);
        const vietnamTime = format(inputDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", {
          timeZone: "Asia/Ho_Chi_Minh",
        });
        fullData.push({
          time: vietnamTime,
          temp: value.Temperature,
          humi: value.Humidity,
          light: value.Light,
        });
      });
      io.emit("full-data", fullData);
    });
  });
};

module.exports = { getInitialData };
