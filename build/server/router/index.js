var express = require('express');
var user = require('../user');
var api = require('../api');

var router = express.Router();

router.post(api.register, user.addOne);
router.post(api.login, user.checkByName);
router.post(api.edit, user.updateOne);
router.post(api.writeOff, user.deleteOne);

module.exports = router;
