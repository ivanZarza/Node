const { Router } = require('express');
const router = Router();
const usersCtrl = require('../controller/user.controller');

router.get('/bye', usersCtrl.byeUsers);

module.exports = router;
