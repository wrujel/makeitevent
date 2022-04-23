import User from "../models/User";
import Role from "../models/Role";

import jwt from "jsonwebtoken";
import config from "../config";

export const signUp = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;
    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password),
    });

    if (req.body.roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }

    await newUser.save();

    return res.send({ message: "User was registered successfully!" });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export const signin = async (req, res) => {
  try {
    const userFound = await User.findOne({
      username: req.body.username,
    }).populate("roles");

    if (!userFound) return res.status(404).send({ message: "User Not Found." });

    const { username, email, roles } = userFound;
    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).send({
        token: null,
        message: "Invalid Password!",
      });

    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
      expiresIn: 3600,
    });

    res.json({ token, username, email, roles });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
};
