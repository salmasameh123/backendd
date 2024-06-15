const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
//Routes
const authRouter = require("./routes/auth/auth.router");
const subscribtionsRouter = require("./routes/subscribtions/subscribtions.router");
//
const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true, //i
  })
);
//http://localhost:4000
app.use(cookieParser());
app.use(express.json());
app.use(authRouter);

app.use(subscribtionsRouter);

//
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong !";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});

module.exports = app;
