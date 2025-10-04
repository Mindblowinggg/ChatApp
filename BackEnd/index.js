import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/dbConnect.js";

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});


connectDB();

