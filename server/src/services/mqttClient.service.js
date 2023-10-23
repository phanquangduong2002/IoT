"use strict";

const { format } = require("date-fns");

const updateData = (connection, client, io) => {
  client.on("message", (topic, message) => {
    if (topic === "home/data") {
      const data = JSON.parse(message.toString());
      const Temperature = data.temperature;
      const Humidity = data.humidity;
      const Light = data.light;

      const currentTime = new Date();
      var month = currentTime.getMonth() + 1;
      var Date_and_Time =
        currentTime.getFullYear() +
        "-" +
        month +
        "-" +
        currentTime.getDate() +
        " " +
        currentTime.getHours() +
        ":" +
        currentTime.getMinutes() +
        ":" +
        currentTime.getSeconds();

      console.log(
        `Time: ${Date_and_Time}, Temperature: ${Temperature} °C, Humidity: ${Humidity} %, Light: ${Light} lux`
      );

      const sql =
        "INSERT INTO sensor_data (Time, Temperature, Humidity, Light) VALUES (?, ?, ?, ?)";

      connection.query(
        sql,
        [Date_and_Time, Temperature, Humidity, Light],
        (error, results) => {
          if (error) throw error;
        }
      );

      const query = "SELECT * FROM sensor_data ORDER BY Time DESC LIMIT 1";

      connection.query(query, (error, results, fields) => {
        if (error) {
          throw error;
        } else {
          if (results.length > 0) {
            const latestData = results[0];
            io.emit("data", {
              time: format(new Date(latestData.Time), "dd-MM-yyyy HH:mm:ss"),
              temp: latestData.Temperature,
              humi: latestData.Humidity,
              light: latestData.Light,
            });
          } else {
            console.log("Không tìm thấy dữ liệu.");
          }
        }
      });
    }
  });
};

module.exports = { updateData };
