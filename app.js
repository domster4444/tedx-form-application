//? config app
const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const app = express();

const appRoot = __dirname;

//?config dotenv file
const dotenv = require("dotenv");
dotenv.config({ path: "./configs/config.env" });

//?config cors
const cors = require("cors");
app.use(
  cors({
    origin: "*",
    methods: "GET,PUT,PATCH,POST,DELETE",
  })
);

//?config cookie-parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//?config body-parser
app.use(express.json({ limit: "50mb" })); //? allow body parsing to be up to 50mb
app.use(express.urlencoded({ extended: true, limit: "50mb" })); //? allow body parsing to be up to 50mb

//?config morgan
const morgan = require("morgan");
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// connnect db
const connectDB = require("./config/connectdb");
connectDB();

//todo: routes imports
app.use(fileUpload());
const testRoutes = require("./routes/testRoutes");
app.use("/api/v1", testRoutes);
app.use("/storage", express.static(path.join(appRoot, "storage")));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "server working fine",
  });
});

module.exports = app;
