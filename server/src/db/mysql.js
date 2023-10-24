const mysql = require("mysql2");

// Tạo kết nối đến cơ sở dữ liệu
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_iot",
});

connection.connect((err) => {
  if (err) {
    console.error("Lỗi kết nối đến MySQL: " + err.message);
    return;
  }
  console.log("Đã kết nối đến MySQL");

  const createTableQuery = `
  CREATE TABLE sensor_data (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Time DATETIME NOT NULL,
    Temperature FLOAT NOT NULL,
    Humidity FLOAT NOT NULL,
    Light INT NOT NULL,
    Gas INT NOT NULL
  );  
  `;

  // Gas INT NOT NULL

  connection.query(createTableQuery, (error) => {
    if (error) {
      console.error("Lỗi khi tạo bảng: " + error.message);
      return;
    }
  });
});

module.exports = connection;
