const expreess = require("express");
const User = require("../models/users");
const bcryptjs = require("bcryptjs");
const { application } = require("express");

const authRouter = expreess.Router();

//signup router
authRouter.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(200)
        .json({ msg: "User with same email already exists!" });
    }
    const hashPassword = await bcryptjs.hash(password, 8);
    let user = User({
      name,
      email,
      password: hashPassword,
    });
    user = await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = authRouter; //so that access any other file
