const router = require('express').Router()
const mailController = require('../controllers/mail.controller')

router.get('/', function (req, res) {
    res.send("asdfdsf")
})

module.exports = router;