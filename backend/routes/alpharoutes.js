const express = require("express");
const alphacon = require("../controllers/alphacon");
const logincon = require("../controllers/logincon");
const signupcon = require("../controllers/signupcon");

const router = express.Router();

router.route("/").get(alphacon.index);
router.route("signup").get(alphacon.signup);
router.route("/").post(logincon.login);
router.route("signup").post(signupcon.signup);

module.exports = router;
