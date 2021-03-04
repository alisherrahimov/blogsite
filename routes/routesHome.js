import express from "express";
import { CheckAdmin } from "../controllers/CheckAdmin";
import { images } from "../controllers/MulterFileUpload";
import { blogupload } from "../controllers/blogUpload";
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("index", { error: null });
});
router.post("/checkadmin", CheckAdmin);
router.get("/home", (req, res) => {
  res.render("home");
});

router.get("/blogupload", (req, res) => {
  res.render("blogupload", { success: null, error: null });
});
router.post("/blogupload", images, blogupload);
export { router };
