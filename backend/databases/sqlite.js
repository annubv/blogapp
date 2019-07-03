const sq = require("sequelize");

const db = new sq({
  dialect: "sqlite",
  storage: "./backend/databases/database.sqlite"
});

const users = db.define("users", {
  name: {
    type: sq.STRING,
    allowNull: false
  },
  email: {
    type: sq.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: sq.STRING,
    allowNull: false
  }
});

const posts = db.define("posts", {
  blog: {
    type: sq.STRING,
    allowNull: false
  },
  name: {
    type: sq.STRING,
    allowNull: false
  },
  email: {
    type: sq.STRING,
    allowNull: false
  }
});

db.sync()
  .then(() => {
    console.log("Database Synced");
  })
  .catch(err => {
    console.log("Error Occured: " + err);
  });

module.exports = {
  users: users,
  posts: posts
};
