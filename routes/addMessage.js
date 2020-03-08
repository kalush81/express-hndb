const Router = require("express");
const router = new Router();

const messages = [];

router.get("/add-message", (req, res, next) => {
  if (req.session.userName === null || req.session.userName === undefined || req.session.userName.match(/^ *$/) !== null) return res.redirect('/')
  //console.log('req.sess.userName', req.session.userName)
  res.render("addMessage", {
    pageTitle: "add-message",
    user: req.session.userName
  });
});

router.post("/add-message", (req, res, next) => {
  if (req.session.userName === null || req.session.userName === undefined || req.session.userName.match(/^ *$/) !== null) return res.redirect('/')
  messages.push({ message: req.body.message, user: req.session.userName });
  res.redirect("/messages");
});

exports.router = router;
exports.messages = messages;
