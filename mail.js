const nodemailer = require("nodemailer");

const randomNumber = Math.floor(Math.random() * 1000000)


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rahmanzadehanoosha@gmail.com',
      pass: 'lkmqfqzdpbfppfsr'
    }
  });


  let message = {
    from: 'rahmanzadehanoosha@gmail.com',
    to: 'ftm.work.88.22@gmail.com',
    subject: 'Test Email from anoosha',
    text:`${randomNumber}`
  };

  transporter.sendMail(message, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });