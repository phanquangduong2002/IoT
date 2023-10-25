"use strict";

const connection = require("../db/mysql");
const { format } = require("date-fns");

const findAllData = async (req, res) => {
  const itemsPerPage = 13;
  const page = req.query.page || 1;
  const offset = (page - 1) * itemsPerPage;

  const query = `SELECT * FROM sensor_data ORDER BY Time DESC LIMIT ${itemsPerPage} OFFSET ${offset}`;
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      const countQuery = "SELECT COUNT(*) AS total FROM sensor_data";
      connection.query(countQuery, (err, countResult) => {
        if (err) {
          console.error("Error querying count:", err);
          res.status(500).json({ error: "Internal server error" });
        } else {
          const totalItems = countResult[0].total;
          const totalPages = Math.ceil(totalItems / itemsPerPage);
          const fullData = [];
          results.forEach(function (value) {
            const inputDate = new Date(value.Time);
            const vietnamTime = format(
              inputDate,
              "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
              {
                timeZone: "Asia/Ho_Chi_Minh",
              }
            );
            fullData.push({
              id: value.ID,
              time: vietnamTime,
              temp: value.Temperature,
              humi: value.Humidity,
              light: value.Light,
              gas: value.Gas,
            });
          });
          res.json({
            data: fullData,
            currentPage: page,
            totalPages: totalPages,
          });
        }
      });
    }
  });
};

const findAllDataControl = async (req, res) => {
  const itemsPerPage = 13;
  const page = req.query.page || 1;
  const offset = (page - 1) * itemsPerPage;

  const query = `SELECT * FROM sensor_control ORDER BY Time DESC LIMIT ${itemsPerPage} OFFSET ${offset}`;
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      const countQuery = "SELECT COUNT(*) AS total FROM sensor_control";
      connection.query(countQuery, (err, countResult) => {
        if (err) {
          console.error("Error querying count:", err);
          res.status(500).json({ error: "Internal server error" });
        } else {
          const totalItems = countResult[0].total;
          const totalPages = Math.ceil(totalItems / itemsPerPage);
          const fullData = [];
          results.forEach(function (value) {
            const inputDate = new Date(value.Time);
            const vietnamTime = format(
              inputDate,
              "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
              {
                timeZone: "Asia/Ho_Chi_Minh",
              }
            );
            fullData.push({
              id: value.ID,
              time: vietnamTime,
              b1: value.B1,
              b2: value.B2,
            });
          });
          res.json({
            data: fullData,
            currentPage: page,
            totalPages: totalPages,
          });
        }
      });
    }
  });
};

module.exports = { findAllData, findAllDataControl };
