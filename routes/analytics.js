var express = require('express');
var analyticsController = require('../controller/analytics')
var router = express.Router();

router.get('/',analyticsController.ViewAnalytics)

module.exports = router;
