const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../schema/userSchema");

const JWT_SECRET_KEY = "vedantsharma1234";

const loginController = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Either username or password is missing!" });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "User doesn't exist!" });
    }

    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) {
      return res.status(400).json({ message: "Password is Incorrect!" });
    }

    const jwtToken = jwt.sign(
      {
        username: user.username,
        id: user._id,
      },
      JWT_SECRET_KEY,
      { expiresIn: "6h" }
    );
    res.status(200).json({ user, jwtToken });
  } catch (err) {
    console.log("Error in login", err);
  }
};

const signupController = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if ( !username || !email || !password) {
      return res.status(400).json({ message: "Either username, email or password is missing!" });
    }
    const checkUser = await User.findOne({ username });

    if (checkUser) {
      return res.status(400).json({ message: "This username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ username, email, password: hashedPassword });
    const jwtToken = jwt.sign(
      {
        username: user.username,
        id: user._id,
      },
      JWT_SECRET_KEY,
      { expiresIn: "6h" }
    );
    res.status(200).json({ user, jwtToken });
  } catch (err) {
    console.log("Error in signup", err);
  }
};

module.exports = {
  loginController,
  signupController,
};
