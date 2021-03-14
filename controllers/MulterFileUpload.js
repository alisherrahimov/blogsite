import multer from "multer";
import sharp from "sharp";

const image = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/upload/images");
  },

  filename: (req, file, cb) => {
    let type;
    if (file.mimetype == "image/jpeg") {
      type = "jpg";
    }
    if (file.mimetype == "image/png") {
      type = "png";
    }
    const name = Math.round(1000000000000000000000 * Math.random());
    cb(null, `${name}` + `.${type}`);
  },
});

const images = multer({ storage: image }).array("image", 2);

export { images };
