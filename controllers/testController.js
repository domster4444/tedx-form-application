const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const User = require("./Users");

require("dotenv").config();
const nodemailer = require("nodemailer");
exports.sendEmailController = catchAsyncErrors(async (request, response) => {
  const { firstName, middleName, lastName, email, phoneNumber, address } = request.body;

  const file = request.files.receipt;
  console.log("res==========");
  const timestamp = Date.now();
  const fileName = `photo_${timestamp}.jpeg`;

  await file.mv(`./storage/${fileName}`, (error) => {
    if (error) {
      return response.status(500).send(error);
    }
    console.log("File Uploaded");
  });

  const receipturl = `https://tedxapi.deerwalk.edu.np/storage/${fileName}`;

  try {
    const user = await User.create({
      firstName,
      middleName,
      lastName,
      email,
      phoneNumber,
      address,
      receiptLink: receipturl,
    });

    // save it in the database

    const result = await user.save();

    console.log(result);
    response.status(200).json({
      success: true,
      message: "Data recorded successfully",
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

exports.getAllUsers = catchAsyncErrors(async (request, response) => {
  const users = await User.find();
  response.status(200).json({
    success: true,
    users,
  });
});
