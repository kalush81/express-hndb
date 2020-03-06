const Router = require('express');

const router =  new Router();
const users = [];

router.get('/add-message', (req, res, next) => {
    res.render('adminAddUser', {pageTitle: 'admin-add-user'})
})

router.post('/add-message', (req, res, next) => {
    console.log('you added user')
    if (req.body.message === '') {
        return res.redirect('/messages');   
    }
    users.push(req.body.message);
    res.redirect('/messages');

})

exports.router = router;
exports.users = users