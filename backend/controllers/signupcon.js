const db = require("../databases/sqlite");
const users = db.users;
const posts = db.posts;

const signup = (req, res) => {
  const { name, email, password } = req.body;
  if (!(name && email && password)) {
    return res.render("profile", {
      msg: "Please enter all detials",
      flag: false
    });
  } else {
    users
      .create({
        name,
        email,
        password
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
          msg: "E-mail ID already exist",
          flag: false
        });
      });
  }
};

module.exports = {
  signup: signup
};
