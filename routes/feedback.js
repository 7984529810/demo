var express = require('express');
var feedbackController = require('../controller/feedback')
var userController = require('../controller/user')

var router = express.Router();

router.post('/feedback',userController.Secure,feedbackController.AddFeedback)
router.get('/',userController.Secure,feedbackController.ViewFeedback)


module.exports = router;
