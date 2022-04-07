import Role from "../models/Role";
import User from "../models/User";
import config from "../config";

import bcrypt from "bcryptjs";

export const initSetup = async () => {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count > 0) return;

    await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "support" }).save(),
      new Role({ name: "admin" }).save(),
    ]);
  } catch (error) {
    console.error(error);
  }
  const user = await User.findOne({ email: "admin@makeitevent.com" });
  const roles = await Role.find({ name: { $in: ["admin", "support"] } });

  if (!user) {
    await User.create({
      username: "admin",
      email: "admin@makeitevent.com",
      password: await bcrypt.hash(config.ADMIN_PASSWORD, 10),
      roles: roles.map((role) => role._id),
    });
    console.log("Admin created");
  }
};
