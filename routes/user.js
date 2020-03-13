const Router = require("express");
const router = new Router();
<<<<<<< HEAD
const url = require('url');

router.post("/add-user", (req, res, next) => {
  const name = req.body.user;
  if (name == '') {
    return res.redirect("/");
  }
  req.session.userName = name;
  res.redirect(url.format({
    pathname:"add-message"
  }));
});
=======
const addUser = require('../controlers/addUser')

router.post("/add-user", addUser);
>>>>>>> testing_branch

exports.addUser = router;

