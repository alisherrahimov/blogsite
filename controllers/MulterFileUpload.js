import multer from "multer";

const image = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/upload/images");
  },
  filename: (req, file, cb) => {
    const name = Math.round(100000000000000000000 * Math.random());
    cb(null, `${name}` + ".jpg");
  },
});
const images = multer({ storage: image }).array("image", 2);

export { image, images };
