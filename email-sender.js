const nodemailer = require('nodemailer');

// Replace with your actual email and app password
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password', // use app password if 2FA enabled
  },
});

let mailOptions = {
  from: 'your-email@gmail.com',
  to: 'your-email@gmail.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email from Node!',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
