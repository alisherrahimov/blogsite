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
import { imageresize } from "../controllers/validation/imageresize";
import { CheckUserPOST } from "../controllers/checkuser";
import nodemailer from "nodemailer";
import { sendEmail } from "../controllers/sendEmail";
const router = express.Router();
//admin panelga kirish
router.get("/", BlogIndexGet);
// blog yuklashdagi page
router.get("/blogupload", BlogUploadGet);
//blogni idsi boyicha korish
router.get("/home/:id", BlogGetId);
//blogni idsi bo'yicha o'zgartirish page
router.get("/home/edit/:id", BlogGetIdEdit);
//adminni tekshirish
router.post("/checkadmin", BlogCheckAdminPost);
//blog yuklash
router.post("/blogupload", images, imageresize, BlogUploadPost);
//blogni idsi bo'yicha o'chirish
router.delete("/home/delete/:id", BlogDelete);
//blogni idsi bo'yicha o'zgartirish
router.put("/home/edit/:id", images, BlogEditPut);
//bloglarni ko'rish
router.get("/home", BlogPaginationHomeGet);
//userlarni ro'yxatga olish
router.post("/register", usersvalidation, registeruserPOST);
router.get("/signin", (req, res) => {
  res.render("usersignin", { error: "" });
});
router.get("/register", (req, res) => {
  res.render("form");
});
router.post("/checkuser", CheckUserPOST);

router.get("/sendemail", sendEmail);
export { router };
