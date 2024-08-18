import User from "../../../Db/models/user.model.js";

export const user = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("user", { user });
};

export const logout = async (req, res) => {
  req.session.destroy(function (err) {
    res.redirect("/login");
  });
};
