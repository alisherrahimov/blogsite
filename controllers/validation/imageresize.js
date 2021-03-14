import sharp from "sharp";
import fs from "fs";
const imageresize = (req, res, next) => {
  sharp(`${req.files[0].path}`)
    .resize(240, 240)
    .toBuffer((err, buffer, result) => {
      if (err) {
        console.log(err);
      } else {
        fs.writeFileSync(
          `./public/upload/images/${req.files[0].filename}`,
          buffer,
          {
            encoding: "base64",
          }
        );
      }
    });
  sharp(`${req.files[1].path}`)
    .resize(1080, 768)
    .toBuffer((err, buffer, result) => {
      if (err) {
        console.log(err);
      } else {
        fs.writeFileSync(
          `./public/upload/images/${req.files[1].filename}`,
          buffer,
          {
            encoding: "base64",
          }
        );
      }
    });
  next();
};

export { imageresize };
