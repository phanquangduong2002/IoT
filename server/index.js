import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.listen(8000, () => {
  console.log("Listen to port 8000");
});
