import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function() {
  try {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
  } catch (error) {
    console.error(error.message);
  }
})


userSchema.statics.login = async function (email, password) {
  
  const user = await User.findOne({ email });
  if(!user){
    throw Error("User not found");
  }

  const comparePass = await bcrypt.compare(password, user.password);
  if (!comparePass) {
    throw Error("Wrong credentials");
  }
  return user;
}

export const User = mongoose.model("User", userSchema);

