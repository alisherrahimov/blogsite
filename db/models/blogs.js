import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    imagelogo: { type: String },
    imagetitle: { type: String },
  },
  { timestamps: true }
);

const blogs = model("blogs", schema);
export { blogs };
