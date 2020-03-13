const Router = require("express");
const router = new Router();

const messages = [];

<<<<<<< HEAD
router.get("/add-message", (req, res, next) => {
  if (req.session.userName === null || req.session.userName === undefined || req.session.userName.match(/^ *$/) !== null) return res.redirect('/')
  //console.log('req.sess.userName', req.session.userName)
  res.render("addMessage", {
    pageTitle: "add-message",
    user: req.session.userName
  });
});
=======
router.get('/chat', (req, res, next) => {
    //console.log('user name retracted and received', req.query.name);
    console.log('req.session.userName on add-message route: ', req.session.userName)
    //if (!req.query.name) return res.redirect('/');
    res.render('chat', {pageTitle: 'add-message', user: req.session.userName})
    
})
>>>>>>> testing_branch

router.post("/add-message", (req, res, next) => {
  if (req.session.userName === null || req.session.userName === undefined || req.session.userName.match(/^ *$/) !== null) return res.redirect('/')
  messages.push({ message: req.body.message, user: req.session.userName });
  res.redirect("/messages");
});

exports.router = router;
exports.messages = messages;
