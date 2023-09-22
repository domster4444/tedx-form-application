const express = require("express");
const router = express.Router();

const { sendEmailController, getAllUsers } = require("../controllers/testController");

router.route("/send-email").post(sendEmailController);
router.route("/get-all-users").get(getAllUsers);

module.exports = router;
