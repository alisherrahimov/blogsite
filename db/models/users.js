import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const users = model("users", UserSchema);

export { users };
