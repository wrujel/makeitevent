import { config } from "dotenv";
config({ path: "./config.env" });

export default {
  ATLAS_URI: process.env.ATLAS_URI,
  SECRET: process.env.JWT_SECRET,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  STMP_SERVER_USER:process.env.STMP_SERVER_USER,
  STMP_SERVER_PASSWORD:process.env.STMP_SERVER_PASSWORD,
};
