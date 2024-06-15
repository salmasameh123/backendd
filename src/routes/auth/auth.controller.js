const KEY = process.env.JWT;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserSchema = require("../../models/user");
const createError = require("../../utils/error");
//
const register = async (req, res, next) => {
  console.log(req.body);
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new UserSchema({
      name: req.body.name,
      username: req.body.username,
      password: hash,
      subscribtion: "free",
    });
    console.log(newUser);
    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};
//
const login = async (req, res, next) => {
  try {
    //Check user
    const user = await UserSchema.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found"));

    //Check password
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) return next(createError(400, "Wrong password"));

    //Respond to client
    const { password, _id, __v, ...otherDetails } = user._doc;
    res.status(200).json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
module.exports = { register, login };
