const Router = require('express');
const router =  new Router();
const user = require('./user')

const messages = [];

router.get('/chat', (req, res, next) => {
    //console.log('user name retracted and received', req.query.name);
    console.log('req.session.userName on add-message route: ', req.session.userName)
    //if (!req.query.name) return res.redirect('/');
    res.render('chat', {pageTitle: 'add-message', user: req.session.userName})
    
})

router.post('/add-message', (req, res, next) => {
    //console.log('req.query.name na serio', req.query.name)
    messages.push({ message: req.body.message, user: req.session.userName });
    res.redirect('/messages');
})

exports.router = router;
exports.messages = messages;