import User from '../Models/userModel.js';
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { body } = req;
  try {
    const user = await User.create(body);
    const { password, ...others} = user._doc;
    res.status(201).json({
      message: "Success",
      data: others
    })
  } catch (error) {
    next(error);
  }
}


export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.Login(email, password);
    //const { password, ...others } = user._doc;
    res.status(201).json({
      message: "Success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      mess: "Failure",
      data: error.message
    })
  }
};
