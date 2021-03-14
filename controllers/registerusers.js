import { users } from "../db/models/users";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
const registeruserPOST = async (req, res) => {
  const { name, lastname, email, password, password2 } = req.body;
  //birinchi parol bilan ikki parol mos kelmaganda xato qaytarish
  if (password !== password2) {
    return res.json({
      success: false,
      error: "Ikkinchi kiritgan parol birinchi bilan mos kelmadi ",
    });
  }
  //Email buyicha bazadan qidirish
  const user = await users.find({ email: email });
  // agar email avval regdan o'tgan bo'lsa xato qaytarishimiz kerak.
  if (user) {
    return res.json({
      success: false,
      error: "Siz avval ro'yxatda o'tgan ekansiz.!",
    });
  }
  //hashlashning kalit sozi o'zgartirish mumkin hohlagan narsaga
  let secretkey = "12345";
  //userning parolini hashlab olishimiz kerak ximoya uchun
  let code = await bcrypt.hashSync(password, 10);
  //basaga userni yozish
  users
    .create({
      name: name,
      lastname: lastname,
      email: email,
      password: code,
    })
    .then((data) => {
      //yozgan datani qaytaradi
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
  //userga token berish
  let token = await jsonwebtoken.sign(
    { name: name, lastname: lastname, email: email, password: code },
    secretkey,
    {
      //24 soatdan keyin token ozgaradi bu yerda vaqtni o'zingiz belgilaysiz sekundlarda
      expiresIn: 86400,
    }
  );
};

export { registeruserPOST };
