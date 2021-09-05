const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");
const keys = require("../keys");
const User = require("../models/user.model");

module.exports.login = async (req, res) => {
  const candidate = await User.findOne({ name: req.body.name });

  if (candidate) {
    const Name = req.body.name;
    const id = candidate._id;
    const isPassCorrect = bcrypt.compareSync(
      req.body.password,
      candidate.password
    );
    if (isPassCorrect) {
      const token = jwt.sign(
        {
          name: candidate.name,
          userId: candidate._id,
        },
        keys.JWT,
        { expiresIn: 60 * 60 }
      );
      res.status(200).json({ token, Name, id });
    } else {
      res.status(401).json({ message: "PASSWORD_NOT_VALID" });
    }
  } else {
    res.status(404).json({ message: "USER_NOT_FOUND" });
  }
};

module.exports.createUser = async (req, res) => {
  const candidate = await User.findOne({ name: req.body.name });
  if (candidate) {
    res.status(409).json({ message: USER__BUSY });
  } else {
    const salt = bcrypt.genSaltSync(10);
    const user = new User({
      name: req.body.name,
      password: bcrypt.hashSync(req.body.password, salt),
    });
    await user.save();
    res.status(201).json(user);
  }
};
