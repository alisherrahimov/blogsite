import { users } from "../db/models/users";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
const registeruserPOST = async (req, res) => {
  const { name, lastname, email, password, password2 } = req.body;
  if (password !== password2) {
    return res.json({
      success: false,
      error: "ikkinchi kiritgan parol birinchi bilan mos kelmadi ",
    });
  }
  const user = await users.find({ email: email });
  if (user) {
    return res.json({
      success: false,
      error: "Siz avval ro'yxatda o'tgan ekansiz.!",
    });
  }
  let secretkey = "12345";
  let code = await bcrypt.hashSync(password, 10);

  users
    .create({
      name: name,
      lastname: lastname,
      email: email,
      password: code,
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
  let token = await jsonwebtoken.sign(
    { name: name, lastname: lastname, email: email, password: code },
    secretkey,
    {
      expiresIn: 86400,
    }
  );
};

export { registeruserPOST };
