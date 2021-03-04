import { adminpanel } from "../db/models/adminandpassword";

const CheckAdmin = (req, res) => {
  const { username, password } = req.body;
  adminpanel.find((err, val) => {
    if (err) {
      console.error(err);
    } else {
      if (username === val[0].username && password === val[0].password) {
        res.redirect("home");
      } else {
        res.render("index", { error: "username yoki email xato" });
      }
    }
  });
};

export { CheckAdmin };
