import {blogs} from "../db/models/blogs";

const viewBlog = (req, res) => {
    blogs.findOne({_id: req.params.id}, (err, val) => {
        if (err) {
            console.error(err);
        } else {
            res.render("viewBlogs", {data: val});
        }
    });
};

export {viewBlog};
