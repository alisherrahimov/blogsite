import { model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const schema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    imagelogo: { type: String },
    imagetitle: { type: String },
  },
  { timestamps: true }
);
schema.plugin(mongoosePaginate);
const blogs = model("blogs", schema);
export { blogs };
