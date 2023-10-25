"use strict";
const { format } = require("date-fns");

const getInitialData = (connection, client, io) => {
  io.on("connection", (socket) => {
    const sql = "SELECT * FROM sensor_data ORDER BY Time DESC LIMIT 13";
    connection.query(sql, function (err, result) {
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

const getInitialDataControl = (connection, client, io) => {
  io.on("connection", (socket) => {
    const sql = "SELECT * FROM sensor_control ORDER BY Time DESC LIMIT 1";

    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
      } else {
        const B1 = results[0].B1;
        const B2 = results[0].B2;

        if (B1 === 1) client.publish("bulb1", "1");
        else client.publish("bulb1", "0");
        if (B2 === 1) client.publish("bulb2", "1");
        else client.publish("bulb2", "0");

        io.emit("control", results);
      }
    });
  });
};

const updateDataControl = (connection, client, io) => {
  io.on("connection", (socket) => {
    socket.on("bulb1", function (data) {
      client.publish("bulb1", data);

      // Lấy phần tử mới nhất từ cơ sở dữ liệu
      connection.query(
        "SELECT * FROM sensor_control ORDER BY Time DESC LIMIT 1",
        (error, results) => {
          if (error) {
            console.error("Error querying database:", error);
          } else {
            let B2 = 0; // Giá trị mặc định cho B2

            if (results.length > 0) {
              const latestData = results[0];
              // Lấy dữ liệu mới nhất (B2)
              B2 = latestData.B2;
            }

            const currentTime = new Date();
            const month = currentTime.getMonth() + 1;
            const Date_and_Time =
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

            // Tiến hành chèn dữ liệu mới vào cơ sở dữ liệu
            const insertQuery =
              "INSERT INTO sensor_control (Time, B1, B2) VALUES (?, ?, ?)";
            const values = [Date_and_Time, data, B2];

            connection.query(insertQuery, values, (insertError) => {
              if (insertError) {
                console.error(
                  "Error inserting data into database:",
                  insertError
                );
              } else {
                console.log("Data inserted into database");
              }
            });
          }
        }
      );
    });

    socket.on("bulb2", function (data) {
      client.publish("bulb2", data);

      // Lấy phần tử mới nhất từ cơ sở dữ liệu (A)
      connection.query(
        "SELECT * FROM sensor_control ORDER BY Time DESC LIMIT 1",
        (error, results) => {
          if (error) {
            console.error("Error querying database:", error);
          } else {
            let B1 = 0; // Giá trị mặc định cho B2

            if (results.length > 0) {
              const latestData = results[0];
              // Lấy dữ liệu mới nhất (B2)
              B1 = latestData.B1;
            }

            const currentTime = new Date();
            const month = currentTime.getMonth() + 1;
            const Date_and_Time =
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

            // Tiến hành chèn dữ liệu mới vào cơ sở dữ liệu
            const insertQuery =
              "INSERT INTO sensor_control (Time, B1, B2) VALUES (?, ?, ?)";
            const values = [Date_and_Time, B1, data];

            connection.query(insertQuery, values, (insertError) => {
              if (insertError) {
                console.error(
                  "Error inserting data into database:",
                  insertError
                );
              } else {
                console.log("Data inserted into database");
              }
            });
          }
        }
      );
    });
  });
};

module.exports = { getInitialData, getInitialDataControl, updateDataControl };
