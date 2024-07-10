var express = require('express');
var eventController = require('../controller/event')
var userController = require('../controller/user')
var router = express.Router();

router.post('/event',userController.Secure,eventController.CreateEvent)
router.get('/',userController.Secure,eventController.ViewEvent)
router.patch('/:id',userController.Secure,eventController.UpdateEvent)
router.delete('/:id',userController.Secure,eventController.DeleteEvent)



module.exports = router;
