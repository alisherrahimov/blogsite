import express from "express";
import { images } from "../controllers/MulterFileUpload";
import {
  BlogCheckAdminPost,
  BlogDelete,
  BlogEditPut,
  BlogGetId,
  BlogGetIdEdit,
  BlogIndexGet,
  BlogUploadGet,
  BlogUploadPost,
} from "../controllers/Crud";
import { BlogPaginationHomeGet } from "../controllers/PaginationHome";
import { usersvalidation } from "../controllers/validation/usersvalidation";
import { registeruserPOST } from "../controllers/registerusers";
import { users } from "../db/models/users";
const router = express.Router();

router.get("/", BlogIndexGet);
router.get("/blogupload", BlogUploadGet);
router.get("/home/:id", BlogGetId);
router.get("/home/edit/:id", BlogGetIdEdit);
router.post("/checkadmin", BlogCheckAdminPost);
router.post("/blogupload", images, BlogUploadPost);
router.delete("/home/delete/:id", BlogDelete);
router.put("/home/edit/:id", images, BlogEditPut);
router.get("/home", BlogPaginationHomeGet);
router.post("/register", usersvalidation, registeruserPOST);
router.get("/users", (req, res) => {
  users.find((err, docs) => {
    res.json(docs);
  });
});
router.get("/register", (req, res) => {
  res.render("form");
});

export { router };
