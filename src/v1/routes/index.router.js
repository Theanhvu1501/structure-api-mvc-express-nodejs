const express = require("express");
const router = express.Router();

router.get("/checkstatus", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "api ok test ci-cd",
  });
});

module.exports = router;
