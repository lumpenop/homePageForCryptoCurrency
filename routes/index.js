const express = require('express');
const router = express.Router();
const mainRouter = require('./main/index');
const mainUser = require('./user'); 


router.use('/user',mainUser);
router.use('/', mainRouter);

module.exports = router; 