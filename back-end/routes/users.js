var express = require("express");
var router = express.Router();

require("../models/connection");
const User = require("../models/users");

/* GET users listing. */
router.get("/", (req, res) => {
  User.find().then((data) => {
    if (data) {
      res.json({ result: true, users: data });
    } else {
      res.json({ result: false, error: "No users found" });
    }
  });
});

module.exports = router;
