const Router = require("express");
const router = new Router();

const messages = [];

router.get("/add-message", (req, res, next) => {
  if (!req.session.userName) req.session.userName = 'anonymous'
  res.render("addMessage", {
    pageTitle: "add-message",
    user: req.session.userName
  });
});

router.post("/add-message", (req, res, next) => {
  messages.push({ message: req.body.message, user: req.session.userName });
  res.redirect("/messages");
});

exports.router = router;
exports.messages = messages;
