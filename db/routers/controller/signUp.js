const user = require("../../module/user");
const bcrypt = require("bcrypt");

const SignUp = async (req, res) => {
  let { name, email, password } = req.body;
  try {
    password = await bcrypt.hash(password, 10);
    const newUser = await new user({
      name,
      email,
      password,

      isAdmin: false,
    });
    const respons = await newUser.save();
    res.status(201).json(respons);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { SignUp };
