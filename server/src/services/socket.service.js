"use strict";
const { format } = require("date-fns");

const getInitialData = (connection, client, io) => {
  io.on("connection", (socket) => {
    const dataSelected =
      "SELECT * FROM sensor_data ORDER BY Time DESC LIMIT 13";
    connection.query(dataSelected, function (err, result) {
      if (err) throw err;
      var fullData = [];
      result.forEach(function (value) {
        const inputDate = new Date(value.Time);
        const vietnamTime = format(inputDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", {
          timeZone: "Asia/Ho_Chi_Minh",
        });
        fullData.push({
          id: value.ID,
          time: vietnamTime,
          temp: value.Temperature,
          humi: value.Humidity,
          light: value.Light,
          gas: value.Gas,
        });
      });
      io.emit("full-data", fullData);
    });
  });
};

module.exports = { getInitialData };
