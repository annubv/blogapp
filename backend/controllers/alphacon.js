const db = require("../databases/sqlite");
const users = db.users;
const posts = db.posts;

const index = (req, res) => {
  posts
    .findAll()
    .then(allblogs => {
      console.log("Showing all posts :" + allblogs);
      return res.render("index", { allblogs: allblogs });
    })
    .catch(err => {
      console.log("Error Occured! :" + err);
    });
};

const signup = (req, res) => {
  res.render("signup");
};

const login = (req, res) => {
  res.render("login");
};

module.exports = {
  index: index,
  signup: signup,
  login: login
};
