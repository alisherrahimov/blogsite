import chalk from "chalk";
import {blogs} from "../db/models/blogs";

const BlogUploadPost = (req, res) => {
    const {title, description} = req.body;
    blogs
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
            res.render("blogupload", {error: "malumot saqlashda xatolik"});
        });
};


const BlogDelete = (req, res) => {
    blogs.deleteOne({_id: req.params.id}, {rawResult: true}, (err) => {
        if (err) {
            console.error(chalk.red.bold(err));
        } else {
            res.redirect("/home");
        }
    });
};
const BlogEditPut = (req, res) => {
    const {title, description} = req.body;
    blogs.findByIdAndUpdate(
        req.params.id,
        {
            title: title,
            description: description,
            imagelogo: req.files[0].path,
            imagetitle: req.files[1].path,
        },
        {rawResult: true},
        (err, data) => {
            if (err) {
                res.render("EditBlogs", {err: err});
            } else {
                res.redirect(`/home/edit/${req.params.id}`);
            }
        }
    );
};
const BlogGet = (req, res) => {
    blogs.find((err, val) => {
        if (err) {
            console.error(chalk.red.bold(err));
        } else {
            res.render("home", {data: val, free: "Siz hali hech qanday blog kiritmagansiz.!!!"});
        }
    });
};
const BlogGetId = (req, res) => {
    blogs.findOne({_id: req.params.id}, (err, val) => {
        if (err) {
            console.error(err);
            res.render("viewblogs", {err: err})
        } else {
            res.render("viewblogs", {data: val})
        }
    });
};
const BlogGetIdEdit = (req, res) => {
    blogs.findOne({_id: req.params.id}, (err, val) => {
        if (err) {
            console.error(err);
            res.render("EditBlogs", {err: err})
        } else {
            res.render("EditBlogs", {data: val})
        }
    });
};
export {BlogUploadPost, BlogDelete, BlogEditPut, BlogGet, BlogGetId, BlogGetIdEdit};