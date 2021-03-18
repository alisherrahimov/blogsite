import bcrypt from "bcrypt";
import {users} from "../db/models/users";
import chalk from "chalk";

const CheckUserPOST = async (req, res) => {
    const {email, password} = req.body;
    if (!email) {
        return res.render("usersignin", {error: "Email Kiritilmagan.!"})
    }
    if (!password) {
        return res.render("usersignin", {error: "password kiritilmadi.!"})
    }
    const user = await users.find({email: email}, (err) => {
        if (err) {
            console.error(chalk.red.bold(err));
        }
    });
    if (user.length) {
        let passcode = await user[0].password;
        await bcrypt.compare(password, passcode, (err, val) => {
            if (err) {
                console.error(chalk.red.bold(err));
            } else {
                if (val) {
                    res.redirect("/home");
                } else {
                    res.render("usersignin", {error: "Parol yoki Email xato!"});
                }
            }
        });
    } else {
        return res.render("usersignin", {error: "bunday email ruyxatdan utmagan"});
    }
};
export {CheckUserPOST};
