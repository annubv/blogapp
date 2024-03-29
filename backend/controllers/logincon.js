const db = require("../databases/sqlite");
const users = db.users;
const posts = db.posts;

const login = (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    return res.render("profile", {
      msg: "Please enter email and password",
      flag: false
    });
  } else {
    users
      .findOne({
        where: {
          email: email,
          password: password
        }
      })
      .then(user => {
        posts
          .findAll({
            where: {
              email: user.email
            }
          })
          .then(allblogs => {
            console.log("Showing posts :" + allblogs);
            return res.render("profile", {
              allblogs: allblogs,
              flag: true,
              user: user.name,
              email: user.email,
              msg: user.name.toUpperCase() + "'S BLOGS"
            });
          })
          .catch(err => {
            console.log("Error Occured: " + err);
          });
      })
      .catch(err => {
        console.log(err);
        return res.render("profile", {
          msg: "Wrong Email or Password. Please Try Again",
          flag: false
        });
      });
  }
};

module.exports = { login: login };
