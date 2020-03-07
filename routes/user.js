const Router = require('express');
const router =  new Router();

let name = 'no name';

router.post('/add-user', (req, res, next) => {
    name = req.body.user;
    if (!name) {
        return res.redirect('/');
    }
    res.redirect('add-message/?name=' + name);
} );

exports.router = router;
exports.name = name;