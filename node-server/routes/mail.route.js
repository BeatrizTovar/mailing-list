const router = require('express').Router()
const mailController = require('../controllers/mail.controller')

// router.get('/', mailController.read) tester route
router.post('/send-updates', mailController.sendList)

module.exports = router;