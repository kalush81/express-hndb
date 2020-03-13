const Router = require('express');
//const user = require('./user');
//const adminData = require('./addMessage');

const router = new Router();

router.get('/chat-room', (req, res, next) => {
        console.log(req.cookies)
        res.render("chatRoom", {userName: req.cookies.userName})
})  

module.exports = router