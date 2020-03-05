const Router = require('express');

const router =  new Router();
const users = [];

router.get('/add-user', (req, res, next) => {
    res.render('adminAddUser', {pageTitle: 'admin-add-user'})
})

router.post('/add-user', (req, res, next) => {
    console.log('you added user')
    users.push(req.body.user);
    res.redirect('/users');
})

exports.router = router;
exports.users = users