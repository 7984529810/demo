var express = require('express');
var ticketController = require('../controller/ticketing')
var userController = require('../controller/user')

var router = express.Router();

router.post('/tickets',userController.Secure,ticketController.CreateTicket)
router.get('/',userController.Secure,ticketController.ViewTicket)
router.patch('/:id',userController.Secure,ticketController.UpdateTicket)
router.delete('/:id',userController.Secure,ticketController.DeleteTicket)


module.exports = router;
