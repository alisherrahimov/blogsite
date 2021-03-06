import express from "express";
import { CheckAdmin } from "../controllers/CheckAdmin";
import { image, images } from "../controllers/MulterFileUpload";
import { blogupload } from "../controllers/blogUpload";
import { Home } from "../controllers/Home";
import { blogs } from "../db/models/blogs";
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("index", { error: null });
});
router.post("/checkadmin", CheckAdmin);
router.get("/home", Home);

router.get("/blogupload", (req, res) => {
  res.render("blogupload", { success: null, error: null });
});
router.post("/blogupload", images, blogupload);
// router.get(`/home/view/${id}`,)
router.delete("/delelteblogs", (req, res) => {
  blogs.findByIdAndDelete(id, {}, (err, data, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
});

router.put("/blogsupdate", (req, res) => {
  const { title, description } = req.body;
  blogs.findByIdAndUpdate(
    id,
    {
      title: title,
      description: description,
      imagelogo: image,
      imagetitle: image,
    },
    { rawResult: true },
    (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
      }
    }
  );
});

export { router };
