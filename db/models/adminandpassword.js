import { model, Schema, SchemaTypes } from "mongoose";

const adminandpassword = new Schema({
  username: { type: String },
  password: { type: String },
});

const adminpanel = model("adminandpassword", adminandpassword);

export { adminpanel };
