const express = require('express');
const router = express.Router();
const controller = require('./controller'); 
const validator = require('./validator')

router.post(
    '/register',
    validator.registerValidator(),    //array
    controller.validate,
    controller.register               //.bind(controller) //callbackfunction
)

router.post(
    '/login',
    validator.LoginValidator(),
    controller.validate,
    controller.login          //callbackfunction
)



module.exports = router;