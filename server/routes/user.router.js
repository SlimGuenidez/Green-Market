const router = require('express').Router();
const itemController = require("../controllers/user.controller");

router.get("/login", itemController.login);
router.post("/signup",itemController.signup)

module.exports = router;
