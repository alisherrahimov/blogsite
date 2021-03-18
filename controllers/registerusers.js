import {users} from "../db/models/users";
import bcrypt, {hash} from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const registeruserPOST = async (req, res) => {
    const {name, lastname, email, password, password2} = req.body;
    //birinchi parol bilan ikki parol mos kelmaganda xato qaytarish
    if (password !== password2) {
        return res.json({
            success: false,
            error: "Ikkinchi kiritgan parol birinchi bilan mos kelmadi",
        });
    }
    //Email buyicha bazadan qidirish
    const user = await users.find({email: email});
    // agar email avval regdan o'tgan bo'lsa xato qaytarishimiz kerak.
    if (!user) {
        return res.json({
            success: false,
            error: "Siz avval ro'yxatda o'tgansiz.!",
        });
    }

    //userning parolini hashlab olishimiz kerak ximoya uchun
    let code;
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            console.error(chalk.red.bold(err));
        } else {
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    console.error(chalk.red.bold(err));
                } else {
                    //basaga userni yozish
                    code = hash;
                    try {
                        users.create({
                            name: name,
                            lastname: lastname,
                            email: email,
                            password: hash,
                        });
                    } catch (error) {
                        console.error(chalk.red.bold(error));
                    }
                }
            });
        }
    });

    //userga token berish
    //hashlashning kalit sozi o'zgartirish mumkin hohlagan narsaga
    let secretkey = process.env.secrettoken;
    let token = await jsonwebtoken.sign(
        {name: name, lastname: lastname, email: email, password: code},
        secretkey,
        {
            //24 soatdan keyin token ozgaradi bu yerda vaqtni o'zingiz belgilaysiz sekundlarda
            expiresIn: 86400,
        }
    );
    res.redirect("/register");
};

export {registeruserPOST};
