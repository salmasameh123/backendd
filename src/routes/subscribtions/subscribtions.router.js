const express = require("express");
const subscribtionsRouter = express.Router();
const { changeSubscribtion } = require("./subscribtions.controller");

//http://localhost:4000/subscribtion
subscribtionsRouter.put("/subscribtion", changeSubscribtion);

module.exports = subscribtionsRouter;
