const express = require("express");
const router = new express.Router();

var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rohanmittalofficial@gmail.com",
    pass: "rohankarenlaisa",
  },
});

router.post("/register", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  var message = req.body;
  var mailOptions = {
    from: "rohanmittalofficial@gmail.com",
    to: message.email,
    subject: "Organix - Registration Verification",
    html:
      '<body style="padding: 20px; background-color: green; color: white;font-family: Helvetica; text-align: center">Welcome to Organix, <b>' +
      message.name +
      "</b><br><br><h2>Your Email Verification code is <b>" +
      message.code +
      "</b></h2><br>Please use this code to verify your account. <br><br>Best Regards,<br>Organix Team</body>",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send({ error, message });
    } else {
      console.log("Email sent: " + info.response);
      res.status(201).send("Email sent successfully!");
    }
  });
});

router.post("/verify-order", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  var message = req.body;
  var mailOptions = {
    from: "rohanmittalofficial@gmail.com",
    to: message.email,
    subject: "Organix - Order Verification",
    html:
      '<body style="padding: 20px; background-color: green; color: white;font-family: Helvetica; text-align: center">Welcome to Organix, <b>' +
      message.name +
      "</b><br><br><h2>Your Order Verification code is <b>" +
      message.code +
      "</b></h2><br>Please use this code to verify and confirm your Order. <br><br>Best Regards,<br>Organix Team</body>",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send({ error, message });
    } else {
      console.log("Email sent: " + info.response);
      res.status(201).send("Email sent successfully!");
    }
  });
});


router.post("/send-invoice", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  var message = req.body;
  var mailOptions = {
    from: "rohanmittalofficial@gmail.com",
    to: message.email,
    subject: "Organix - Order Invoice",
    html:
      '<body style="padding: 20px; background-color: green; color: white;font-family: Helvetica; text-align: center"><h1>Thank you for ordering on Organix, <b>' +
      message.name +
      "</b></h1><br>" +
      "Order Date: " +
      message.datePlaced +
      "<br><h2>Your total bill amount is <b>" +
      message.totalAmount +
      "</b>.</h2><br><b>Delivery location chosen is: </b>\n" +
      message.addressLine1 +
      "\n" +
      message.addressLine2 +
      "\n" +
      message.city +
      ", " +
      message.state +
      "\n" +
      message.country +
      "<br>Contact Number: " +
      message.phoneNumber +
      "<br><br>Best Regards,<br>Organix Team</body>",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send({ error, message });
    } else {
      console.log("Email sent: " + info.response);
      res.status(201).send("Email sent successfully!");
    }
  });
});

module.exports = router;
