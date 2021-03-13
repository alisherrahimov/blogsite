import multer from "multer";

const image = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/upload/images");
  },

  filename: (req, file, cb) => {
    let type;
    if (file.mimetype == "image/jpeg") {
      type = file.mimetype.slice(6, 10);
    }
    if (file.mimetype == "image/png") {
      type = file.mimetype.slice(6, 9);
    }
    console.log(type);
    const name = Math.round(1000000000000000000000 * Math.random());
    cb(null, `${name}` + `.${type}`);
  },
});

const images = multer({ storage: image }).array("image", 2);

export { images };
