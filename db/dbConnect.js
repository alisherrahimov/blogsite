import chalk from "chalk";
import mongoose from "mongoose";

const connection = mongoose
    .connect("mongodb://127.0.0.1:27017", {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log(chalk.yellow.bold("DB Connected"));
    })
    .catch((err) => {
        console.error(chalk.red.bold(err));
    });

export {connection};
