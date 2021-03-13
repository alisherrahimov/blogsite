import chalk from "chalk";
import { blogs } from "../db/models/blogs";
import { adminpanel } from "../db/models/adminandpassword";

const BlogUploadPost = async (req, res) => {
  const { title, description } = req.body;
  const data = await blogs
    .create({
      title: title,
      description: description,
      imagelogo: req.files[0].path,
      imagetitle: req.files[1].path,
    })
    .then(() => {
      res.redirect("/home");
    })
    .catch(() => {
      res.render("blogupload", { error: "malumot saqlashda xatolik" });
    });
};
const BlogDelete = async (req, res) => {
  const data = await blogs.deleteOne(
    { _id: req.params.id },
    { rawResult: true },
    (err) => {
      if (err) {
        console.error(chalk.red.bold(err));
      } else {
        res.redirect("/home");
      }
    }
  );
};
const BlogEditPut = async (req, res) => {
  const { title, description } = req.body;
  const data = await blogs.findByIdAndUpdate(
    req.params.id,
    {
      title: title,
      description: description,
      imagelogo: req.files[0].path,
      imagetitle: req.files[1].path,
    },
    { rawResult: true },
    (err, data) => {
      if (err) {
        res.render("EditBlogs", { err: err });
      } else {
        res.redirect(`/home/edit/${req.params.id}`);
      }
    }
  );
};
const BlogGet = async (req, res) => {
  const data = await blogs.find((err, val) => {
    if (err) {
      console.error(chalk.red.bold(err));
    } else {
      res.render("home", {
        data: val,
        free: "Siz hali hech qanday blog kiritmagansiz.!!!",
      });
    }
  });
};
const BlogGetId = async (req, res) => {
  const data = await blogs.findOne({ _id: req.params.id }, (err, val) => {
    if (err) {
      console.error(err);
      res.render("viewblogs", { err: err });
    } else {
      res.render("viewblogs", { data: val });
    }
  });
};
const BlogGetIdEdit = async (req, res) => {
  const data = await blogs.findOne({ _id: req.params.id }, (err, val) => {
    if (err) {
      console.error(err);
      res.render("EditBlogs", { err: err });
    } else {
      res.render("EditBlogs", { data: val });
    }
  });
};
const BlogIndexGet = async (req, res) => {
  await res.render("index", { error: null });
};
const BlogCheckAdminPost = async (req, res) => {
  const { username, password } = req.body;
  adminpanel.find((err, val) => {
    if (err) {
      console.error(err);
    } else {
      if (username === val[0].username && password === val[0].password) {
        res.redirect("/home");
      } else {
        res.render("index", { error: "Username or Password wrong" });
      }
    }
  });
};
const BlogUploadGet = async (req, res) => {
  await res.render("blogupload", { success: null, error: null });
};
export {
  BlogUploadPost,
  BlogDelete,
  BlogEditPut,
  BlogGet,
  BlogGetId,
  BlogGetIdEdit,
  BlogIndexGet,
  BlogCheckAdminPost,
  BlogUploadGet,
};
