const Router = require('express');
const path = require('path');
const fs =  require('fs');

const router = new Router();
const adminData = require('./admin');

router.get('/messages', (req, res, next) => {
    console.log(adminData.users)
    res.render("messages", {users: adminData.users})
})

module.exports = router