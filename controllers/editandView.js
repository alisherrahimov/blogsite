import { blogs } from "../db/models/blogs";
const editandView = (req, res) => {
  blogs.findOne({ _id: req.params.id }, (err, val) => {
    if (err) {
      console.error(err);
    } else {
      console.log(val);

      res.render("EditBlogs", { data: val });
    }
  });
};

export { editandView };
