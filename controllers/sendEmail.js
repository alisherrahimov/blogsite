import nodemailer from "nodemailer";

const sendEmail = (req, res, next) => {
  let trasporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ooops2211@gmail.com",
      pass: "alisher2211",
    },
  });
  let mailOptions = {
    from: " alisher.raximov97@gmail.com",
    to: "alisherrahimovprogrammes@gmail.com",
    subject: "bir narsalar",
    text: "<h1 style = {color : #2112}></h1>",
    html: "<h1 style = {color : #2112}></h1>",
  };

  trasporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });
};

export { sendEmail };
