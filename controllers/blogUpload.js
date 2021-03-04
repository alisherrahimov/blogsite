import { blogs } from "../db/models/blogs";

const blogupload = (req, res) => {
  const { username, description } = req.query;
  console.log(req.query);
  blogs
    .create({
      username: username,
      description: description,
      imagelogo: req.files[0].filename,
      imagetitle: req.files[1].filename,
    })
    .then(() => {
      res.render("blogupload", { success: "malumotlar saqlandi" });
    })
    .catch(() => {
      res.render("blogupload", { error: "malumot saqlashda xatolik" });
    });
};

export { blogupload };
