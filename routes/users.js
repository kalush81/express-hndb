const Router = require('express');
const path = require('path');
const fs =  require('fs');

const router = new Router();
const adminData = require('./admin');

router.get('/users', (req, res, next) => {
    console.log(adminData.users)
    //res.sendFile(path.join(__dirname, '../views', 'users.html'));
    res.render("users", {users: adminData.users})
})

module.exports = router