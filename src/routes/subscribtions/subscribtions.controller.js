const UserSchema = require("../../models/user");

const changeSubscribtion = async (req, res, next) => {
  const { username, subscribtion } = req.body;

  try {
    //Check user
    const user = await UserSchema.findOneAndUpdate(
      { username: username },
      { subscribtion: subscribtion },
      {
        new: true,
      }
    );

    res.status(200).json({ message: "User subscribtion has been updated" });
  } catch (err) {
    next(err);
  }
};
module.exports = { changeSubscribtion };
