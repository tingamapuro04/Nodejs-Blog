import User from '../Models/userModel.js';
import jwt from "jsonwebtoken";


const generateToken = async (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: 60*60*24*7});
}

export const registerUser = async (req, res) => {
  const { body } = req;
  try {
    
    const user = await User.create(body);
    const token = await generateToken(user.id);
    res.cookie('blog', token);
    const { password, ...others} = user._doc;
    res.status(201).json({
      message: "Success",
      data: others
    })
  } catch (error) {
    console.error(error.message)
  }
}


export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.Login(email, password);
    const token = await generateToken(user.id);
    res.cookie("blog1", token);
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
