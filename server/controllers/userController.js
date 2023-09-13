const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const JWT_SECRET = "vedantsharma1234";

const signinController = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Invalid field!" });
  }

  try {
    const user = await User.findOne({ name: username });

    if (!user) {
      return res.status(400).json({ message: "User doesn't exist!" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    const token = jwt.sign(
      {
        username: user.username,
        id: user._id,
      },
      JWT_SECRET,
      { expiresIn: "6h" }
    );
    res.status(200).json({ result: user, token });
  } catch (err) {
    console.log("Error in signin", err);
  }
};

const signupController = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!email || !username || !password) {
      return res.status(400).json({ message: "Invalid field!" });
    }
    const userExists = await User.findOne({ name: username });

    if (userExists) {
      return res.status(400).json({ message: "This username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({ name: username, email, password: hashedPassword });
    const token = jwt.sign(
      {
        username: result.name,
        id: result._id,
      },
      JWT_SECRET,
      { expiresIn: "6h" }
    );
    res.status(200).json({ result, token });
  } catch (err) {
    console.log("Error in signup", err);
  }
};

module.exports = {
  signinController,
  signupController,
};
