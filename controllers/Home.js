import chalk from "chalk";
import { blogs } from "../db/models/blogs";
const Home = (req, res) => {
  blogs.find((err, val) => {
    if (err) {
      console.error(chalk.red.bold(err));
    } else {
      res.render("home", { data: val });
    }
  });
};

export { Home };
