"use strict";

const connection = require("../db/mysql");

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

          res.json({
            data: results,
            currentPage: page,
            totalPages: totalPages,
          });
        }
      });
    }
  });
};

module.exports = { findAllData };
