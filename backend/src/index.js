const express = require("express");
const cors = require("cors");
const packageJson = require("../package.json");

const routes = require("./routes");
const config = require("../config");

const app = express();

app.use(cors());
app.locals.config = config;

app.enable("trust proxy");
app.disable("x-powered-by");

app.use(express.json());
app.use(routes);

module.exports = app;
