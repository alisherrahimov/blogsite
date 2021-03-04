import chalk from "chalk";
import mongoose from "mongoose";

const connection = mongoose
  .connect("mongodb://127.0.0.1:27017", {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(chalk.yellow.bold("DB Connected"));
  })
  .catch((err) => {
    console.log(err);
  });

export { connection };
