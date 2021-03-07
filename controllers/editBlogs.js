import { blogs } from "../db/models/blogs";

const editBlogs = (req, res) => {
  console.log("body", req.body);
  blogs.findByIdAndUpdate({});
};

export { editBlogs };
