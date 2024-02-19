require("dotenv").config();
const serverless = require("serverless-http");
const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload")
const app = express();
const cors = require('cors')
const helmet = require('helmet')


const { authRoute, userRoute, pharmacyRoute, orderRoute} = require("./src/routes");
const { errorConverter, errorHandler } = require("./src/middleware/error");
const ApiError = require("./src/utils/ApiError");
const httpStatus = require("http-status");

app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));

app.use(cors())
app.use(helmet())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/pharmacy", pharmacyRoute)
app.use("/api/v1/order", orderRoute)

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Route Not found"));
});

app.use(errorConverter);
app.use(errorHandler);

module.exports = app;//

// app.listen(3004, () => console.log(`Listening on: 3004`));

//module.exports.handler = serverless(app);
