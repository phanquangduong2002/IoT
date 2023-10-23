"use strict";

const { server } = require("./src/app");

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Listen to port ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log(`Exit server Express`));
});
