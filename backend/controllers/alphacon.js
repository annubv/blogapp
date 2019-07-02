const index = (req, res) => {
  res.render("index");
};

const signup = (req, res) => {
  res.render("signup");
};

const profile = (req, res) => {
  res.render("profile");
};

module.exports = {
  index: index,
  signup: signup,
  profile: profile
};
