import express from "express";
import {CheckAdmin} from "../controllers/CheckAdmin";
import {images} from "../controllers/MulterFileUpload";
import {BlogDelete, BlogEditPut, BlogGet, BlogGetId, BlogGetIdEdit, BlogUploadPost} from "../controllers/Crud";

const router = express.Router();
router.get("/", async (req, res) => {
    res.render("index", {error: null});
});
router.post("/checkadmin", CheckAdmin);
router.get("/home", BlogGet);
router.get("/blogupload", (req, res) => {
    res.render("blogupload", {success: null, error: null});
});
router.post("/blogupload", images, BlogUploadPost);
router.get("/home/:id", BlogGetId);
router.get("/home/edit/:id", BlogGetIdEdit);
router.delete("/home/delete/:id", BlogDelete);
router.put("/home/edit/:id", images, BlogEditPut);

router.post("/imagepost", images, (req, res) => {

})
export {router};
