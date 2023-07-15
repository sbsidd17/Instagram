import { userModal } from "../model/useerModal.js";
import bcript from "bcryptjs";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  let { name, email, password, bio, username } = req.body;
  password = await bcript.hash(password, 10);
  try {
    await userModal.create({ name, email, password, bio, username });
    res.status(200).send({ msg: "User Registered Successfully" });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userData = await userModal.findOne({ email }).select("+password");

    if (userData) {
      const passwordMatched = await bcript.compare(password, userData.password);
      if (passwordMatched) {
        userData.password = undefined;
        const payload = {
          userId: userData._id,
          email: userData.email
        };
        const secretKey = process.env.JWT_SECRATE_KEY;
        const token = jwt.sign(payload, secretKey, { expiresIn: "24h" });
        res.cookie("token", token, {
          maxAge: 1 * 24 * 60 * 60 * 1000,
          httpOnly: true,
        });
        res.status(200).send({ msg: "User Login Successfully" });
      } else {
        res.status(400).send({ msg: "Password not matched" });
      }
    } else {
      res.status(400).send({ msg: "User Not Found" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

const logout = (req, res, next) => {
  const cookieOption = {
      expires: new Date(),
      httpOnly: true
  }
  try {
      res.cookie('token', null, cookieOption);
      res.status(200).json({
          success: true,
          message: 'Logged Out'
      })
  } catch (error) {
      return res.status(400).json({
          success: false,
          message: error.message
      });
  }
}


const profile = async (req, res) => {
  const userId = req.user.userId;
  const user = await userModal.findById(userId)
  return res.status(200).json({
    success: true,
    data: user
});
  
};

export { signup, login, logout, profile };
