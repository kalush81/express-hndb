const Router = require('express');
const user = require('./user');
const adminData = require('./addMessage');

const router = new Router();

router.get('/messages', (req, res, next) => {
        console.log(adminData.messages)
        res.render("messages", {messages: adminData.messages, name: req.session.userName})
})  

module.exports = router