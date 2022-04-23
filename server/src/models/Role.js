import { Schema, model } from "mongoose";

export const ROLES = ["user", "admin", "support"];

const roleSchema = new Schema(
  {
    name: String,
  },
  {
    collection: "Roles",
    versionKey: false,
  }
);

export default model("Role", roleSchema);
