var express = require('express');
var sessionController = require('../controller/session')
var userController = require('../controller/user')

var router = express.Router();

router.post('/session',userController.Secure,sessionController.AddSession)
router.get('/',userController.Secure,sessionController.ViewSession)
router.patch('/:id',userController.Secure,sessionController.UpdateSession)
router.delete('/:id',userController.Secure,sessionController.DeleteSession)


module.exports = router;
