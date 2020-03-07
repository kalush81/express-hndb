const Router = require('express');
const router = new Router();
let user = require('./user');

router.get('/', (req, res, next) => {
    user.name = 'noname';
    res.render('home', {pageTitle: 'home'});
})

module.exports = router