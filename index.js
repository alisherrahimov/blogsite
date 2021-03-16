import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import { router } from "./routes/routesHome";
import path from "path";
import { connection } from "./db/dbConnect";
import cors from "cors";
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/public", express.static("public"));
app.use(router);
app.listen(process.env.PORT, () => {
  console.log(chalk.blue.bold(`Server running ${process.env.PORT}`));
});
