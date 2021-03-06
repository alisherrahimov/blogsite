import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import { router } from "./routes/routesHome";
import { connection } from "./db/dbConnect";
import path from "path";
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/public", express.static("public"));
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(chalk.blue.bold(`Server running ${process.env.PORT}`));
});
