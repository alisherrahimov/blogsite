import { blogs } from "../db/models/blogs";
const myCustomLabels = {
  totalDocs: "itemCount",
  docs: "itemsList",
  limit: "perPage",
  page: "currentPage",
  nextPage: "next",
  prevPage: "prev",
  totalPages: "pageCount",
  pagingCounter: "slNo",
  meta: "paginator",
};
const BlogPaginationHomeGet = async (req, res) => {
  await blogs.paginate(
    {},
    //agar malumotlarni koproq olishni xoxlasangiz limitni ozgartiring
    { page: req.query.page, limit: 3, customLabels: myCustomLabels },
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        // res.json({ data: result });
        res.render("home", { data: result });
      }
    }
  );
};

export { BlogPaginationHomeGet };
