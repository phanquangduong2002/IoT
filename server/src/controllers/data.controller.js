"use strict";

const connection = require("../db/mysql");
const { format } = require("date-fns");

const findAllData = async (req, res) => {
  const itemsPerPage = 13;
  const page = req.query.page || 1;
  const offset = (page - 1) * itemsPerPage;
  const date = req.query.date;

  let query = "SELECT * FROM sensor_data";
  if (date !== undefined) {
    const formatDate = date.split("-").reverse().join("-");
    query += ` WHERE DATE(Time) = '${formatDate}'`;
  }

  query += ` ORDER BY Time DESC LIMIT ${itemsPerPage} OFFSET ${offset}`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      let countQuery = "SELECT COUNT(*) AS total FROM sensor_data";
      if (date !== undefined) {
        const formatDate = date.split("-").reverse().join("-");
        countQuery += ` WHERE DATE(Time) = '${formatDate}'`;
      }
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
  const date = req.query.date;

  let query = "SELECT * FROM sensor_control";
  if (date !== undefined) {
    const formatDate = date.split("-").reverse().join("-");
    query += ` WHERE DATE(Time) = '${formatDate}'`;
  }

  query += ` ORDER BY Time DESC LIMIT ${itemsPerPage} OFFSET ${offset}`;
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      let countQuery = "SELECT COUNT(*) AS total FROM sensor_control";
      if (date !== undefined) {
        const formatDate = date.split("-").reverse().join("-");
        countQuery += ` WHERE DATE(Time) = '${formatDate}'`;
      }
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
              tb: value.TB,
              status: value.Status,
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
