import { blogs } from "../db/models/blogs";

const editBlogs = () => {
  blogs.findByIdAndUpdate({});
};

export { editBlogs };
