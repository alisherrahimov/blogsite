import express from "express";
import { images } from "../controllers/MulterFileUpload";
import {
  BlogCheckAdminPost,
  BlogDelete,
  BlogEditPut,
  BlogGet,
  BlogGetId,
  BlogGetIdEdit,
  BlogIndexGet,
  BlogUploadGet,
  BlogUploadPost,
} from "../controllers/Crud";
import { BlogPaginationHomeGet } from "../controllers/PaginationHome";

const router = express.Router();

router.get("/", BlogIndexGet);
router.get("/blogupload", BlogUploadGet);
router.get("/home", BlogGet);
router.get("/home/:id", BlogGetId);
router.get("/home/edit/:id", BlogGetIdEdit);
router.post("/checkadmin", BlogCheckAdminPost);
router.post("/blogupload", images, BlogUploadPost);
router.delete("/home/delete/:id", BlogDelete);
router.put("/home/edit/:id", images, BlogEditPut);
router.get("/users", BlogPaginationHomeGet);
export { router };
