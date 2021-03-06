import { blogs } from "../db/models/blogs";

const blogupload = (req, res) => {
  const { title, description } = req.body;
  console.log(req.files);
  blogs
    .create({
      title: title,
      description: description,
      imagelogo: req.files[0].path,
      imagetitle: req.files[1].path,
    })
    .then(() => {
      res.redirect("/blogupload");
    })
    .catch(() => {
      res.render("blogupload", { error: "malumot saqlashda xatolik" });
    });
};

export { blogupload };
