var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('feedbackPage');
});

router.post('/', function (req, res, next) {
    var subscription = req.body.subscribe || 'off';
    res.render('feedbackSubmittedPage', {'subscription' : subscription})
});

module.exports = router;
