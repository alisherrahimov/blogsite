import bcrypt from "bcrypt";
import { users } from "../db/models/users";
const CheckUserPOST = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.json({ success: false, error: "email kiritilmagan" });
  }
  if (!password) {
    return res.json({ success: false, error: "parol kirilmagan" });
  }
  const user = await users.find({ email: email }, (err) => {
    if (err) {
      console.log(err);
    }
  });
  if (user.length) {
    let passcode = await user[0].password;
    await await bcrypt.compare(password, passcode, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        if (res) {
          res.redirect("/home");
        } else {
          res.render("register", { error: "parol xato" });
        }
      }
    });
  } else {
    return res.json({
      success: false,
      errror: "bunday email ruyxatdan utmagan",
    });
  }
};
export { CheckUserPOST };
