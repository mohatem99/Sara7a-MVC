import User from "../../../Db/models/user.model.js";
export const register = (req, res) => {
  res.render("register", { session: null });
};

export const handleRegister = async (req, res) => {
  try {
    await User.create(req.body);
    res.redirect("/login");
  } catch (e) {
    console.log(e.message);
  }
};
