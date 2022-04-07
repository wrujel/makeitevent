import { config } from "dotenv";
config({ path: "./config.env" });

export default {
  ATLAS_URI: process.env.ATLAS_URI,
  SECRET: process.env.JWT_SECRET,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
};
