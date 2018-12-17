const router = require('express').Router();
const mailRoute = require('./mail.route');

router.use('/mail', mailRoute)

module.exports = router;