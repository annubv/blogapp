const express = require("express");
const bp = require("body-parser");
const compress = require("compression");
const logger = require("morgan");
const cors = require("cors");
const ejs = require("ejs");
const alpharoutes = require(__dirname + "/backend/routes/alpharoutes");

const router = express.Router();
const app = express();

app.use(express.static(__dirname + "/client/css"));
app.use(express.static(__dirname + "/client/assets"));
app.use(cors());
app.use(compress());
app.use(logger("dev"));
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(logger("dev"));
app.use("/", alpharoutes);
app.engine("html", ejs.renderFile);
app.set("views", __dirname + "/client/views");
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("App running on port" + app.get("port"));
});
