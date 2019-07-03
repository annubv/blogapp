const db = require("../databases/sqlite");
const users = db.users;
const posts = db.posts;

const blogpost = (req, res) => {
  const { blog, name, email } = req.body;
  if (!(blog && name && email)) {
    return res.render("profile", {
      msg: "Please enter every field",
      flag: false
    });
  } else {
    posts
      .create({
        blog,
        name,
        email
      })
      .then(post => {
        console.log(post);
        posts
          .findAll({
            where: {
              email: email
            }
          })
          .then(allblogs => {
            console.log("Showing posts :" + allblogs);
            return res.render("profile", {
              allblogs: allblogs,
              flag: true,
              user: name,
              email: email,
              msg: name + "'s Blogs"
            });
          })
          .catch(err => {
            console.log("Error Occured: " + err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
};

module.exports = { blogpost: blogpost };
