const Router = require('express');
const router = new Router();

router.get('/', (req, res, next) => {
    //res.session.userName
    res.render('home', {pageTitle: 'home'});
})

module.exports = router