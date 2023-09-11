const express = require("express");
const router = express.Router();

const { sendEmailController } = require("../controllers/testController");

router.route("/send-email").post(sendEmailController);

module.exports = router;
