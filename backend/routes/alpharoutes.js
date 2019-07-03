const express = require("express");
const alphacon = require("../controllers/alphacon");
const logincon = require("../controllers/logincon");
const signupcon = require("../controllers/signupcon");
const blogpost = require("../controllers/blogpost");

const router = express.Router();

router.route("/").get(alphacon.index);
router.route("/signup").get(alphacon.signup);
router.route("/signup").post(signupcon.signup);
router.route("/login").get(alphacon.login);
router.route("/login").post(logincon.login);
router.route("/profile").post(blogpost.blogpost);

module.exports = router;
