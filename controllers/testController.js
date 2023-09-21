const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
require("dotenv").config();
const nodemailer = require("nodemailer");
exports.sendEmailController = catchAsyncErrors(async (request, response) => {
  const { firstName, middleName, lastName, email, phoneNumber, address } =
    request.body;

  const file = request.files.receipt;
  console.log("res==========");
  const timestamp = Date.now();
  const fileName = `photo_${timestamp}.jpeg`;

  file.mv(`./storage/${fileName}`, (error) => {
    if (error) {
      return response.status(500).send(error);
    }
    console.log("File Uploaded");
  });

  var from = "donotreplythisback@gmail.com";
  var to = "texdwitcollege@gmail.com";
  var subject = "Participant Details:";

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "donotreplythisback@gmail.com",
      pass: "sajjhjleycfzonhx",
    },
  });
  const url = `${process.env.URL}/storage/${fileName}`;

  var mailOptions = {
    from: from,
    to: to,
    subject: subject,

    headers: {
      "X-Laziness-level": 1000,
      charset: "UTF-8",
      "Content-Type": "text/html; charset=UTF-8",
      "Content-Transfer-Encoding": "8bit",
      "MIME-Version": "1.0",
    },

    html: `
      <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; text-align: left;">
        <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #dddddd; padding: 8px;">First Name</th>
            <th style="border: 1px solid #dddddd; padding: 8px;">Middle Name</th>
            <th style="border: 1px solid #dddddd; padding: 8px;">Last Name</th>
            <th style="border: 1px solid #dddddd; padding: 8px;">Phone Number</th>
            <th style="border: 1px solid #dddddd; padding: 8px;">Email</th>
            <th style="border: 1px solid #dddddd; padding: 8px;">Address</th>
            <th style="border" 1px solid #dddddd; padding: 8px;">Receipt URL</th>
        </tr>
        <tr>


        <td style="border: 1px solid #dddddd; padding: 8px;">${firstName}</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">${middleName}</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">${lastName}</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">${phoneNumber}</td>
            <td style="border: 1px solid #dddddd; padding: 8px;">${email}</td>
            <td style="border: 1px solid #dddddd; padding: 8px;">${address}</td>
            <td style="border" 1px solid #dddddd; padding: 8px;">${url}</th>
        </tr>
    </table>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      response.status(400).json({
        success: false,
        message: "Email not sent",
      });
    } else {
      console.log("Email sent: " + info.response);

      response.status(200).json({
        success: true,
        message: "Email sent",
      });
    }
  });
});
