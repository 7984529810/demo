var express = require('express');
var userController = require('../controller/user')
var router = express.Router();

router.post('/register',userController.RegisterOrganizer)
router.post('/login',userController.OrganizerLogin)
router.post('/register',userController.RegisterOrganizer)
router.post('/login',userController.OrganizerLogin)
router.patch('/:id',userController.UpdateUserProfile)

            
module.exports = router;
