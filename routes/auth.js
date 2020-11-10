var express = require("express");
var router = express.Router();

/* Check OTP */
router.post("/otp", function (req, res, next) {
  let { otp } = req.body;
  if (otp.length === 6 && otp[otp.length - 1] !== "7")
    return res.json({ status: "success" });
  return res.json({ status: "error" });
});

module.exports = router;
