const Router = require('express');
const router =  new Router();
const users = [];

let uniqueUser;
router.get('/add-message', (req, res, next) => {
    if (!req._parsedOriginalUrl.search) {
        return res.render('adminAddUser', {pageTitle: 'admin-add-user', user: uniqueUser})
    }
    uniqueUser = req._parsedOriginalUrl.search.split('=')[1];
    res.render('adminAddUser', {pageTitle: 'admin-add-user', user: uniqueUser})
})

router.post('/add-message', (req, res, next) => {
    if (req.body.message === '') {
        return res.redirect('/messages');   
    }
    users.push({message: req.body.message, user: uniqueUser});
    res.redirect('/messages');
})

exports.router = router;
exports.users = users