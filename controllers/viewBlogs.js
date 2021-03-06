import { blogs } from "../db/models/blogs";
const viewBlogs = (req, res) => {
  blogs.findOne({ _id: req.params.id }, (err, val) => {
    if (err) {
      console.error(err);
    } else {
      console.log(val);
      res.render("viewBlogs", { data: val });
    }
  });
};

export { viewBlogs };
