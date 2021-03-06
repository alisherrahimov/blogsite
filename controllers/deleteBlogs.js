import chalk from "chalk";
import { blogs } from "../db/models/blogs";

const deleteBlogs = (req, res) => {
  blogs.deleteOne({ _id: req.params.id }, { rawResult: true }, (err) => {
    if (err) {
      console.error(chalk.red.bold(err));
    } else {
      res.redirect("/home");
    }
  });
};

export { deleteBlogs };
