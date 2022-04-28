import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";
import Role from "../models/Role";

export const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) return res.json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;

    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.json({ message: "No user found" });

    next();
  } catch (error) {
    return res.json({ message: "Unauthorized!" });
  }
};

export const isSupport = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "support") {
        next();
        return;
      }
    }

    return res.json({ message: "Require Support Role!" });
  } catch (error) {
    console.log(error);
    return res.send({ message: error });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    console.log(user);
    const roles = await Role.find({ _id: { $in: user.roles } });
    console.log(roles);

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        next();
        return;
      }
    }

    return res.json({ message: "Require Admin Role!" });
  } catch (error) {
    console.log(error);
    return res.send({ message: error });
  }
};
