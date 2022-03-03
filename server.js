const express = require("express");
const dotenv = require("dotenv");
const app = express();
const bootcampsRouter = require("./routes/bootcamps.router");
//load env
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;

app.use("/api/v1/bootcamps", bootcampsRouter);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
