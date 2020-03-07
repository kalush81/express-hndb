const Router = require('express');
const router =  new Router();
const messages = [];
let name = 'noname'

router.get('/add-message', (req, res, next) => {
    console.log('user name retracted and received', req.query.name)
    name = req.query.name;
    if (!name) return res.redirect('/');
    res.render('adminAddMessage', {pageTitle: 'admin-add-user', user: name})
})

router.post('/add-message', (req, res, next) => {
    console.log(name)
    messages.push({ message: req.body.message, user: name });
    res.redirect('/messages/?name=' + name);
})

exports.router = router;
exports.messages = messages;