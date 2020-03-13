const Router = require('express');
const router = new Router();
const getHome =  require('../controlers/getHome')

router.get('/', getHome)

module.exports = router