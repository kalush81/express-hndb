const Router = require("express");
const router = new Router();
const addUser = require('../controlers/addUser')

router.post("/add-user", addUser);

exports.addUser = router;

