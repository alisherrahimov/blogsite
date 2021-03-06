import express from "express";
import { CheckAdmin } from "../controllers/CheckAdmin";
import { images } from "../controllers/MulterFileUpload";
import { blogupload } from "../controllers/blogUpload";
import { Home } from "../controllers/Home";
import { viewBlogs } from "../controllers/viewBlogs";
import { editBlogs } from "../controllers/editBlogs";
import { editandView } from "../controllers/editandView";
import { deleteBlogs } from "../controllers/deleteBlogs";
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
router.get("/home/:id", viewBlogs);
router.get("/home/edit/:id", editandView);
router.delete("/home/delete/:id", deleteBlogs);
router.put("/home/edit/:id", editBlogs);
export { router };
