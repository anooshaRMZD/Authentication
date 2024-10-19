const expressValidator = require('express-validator');
const check = expressValidator.check;

module.exports = new class{
    registerValidator(){
        return [
            
            check('email').isEmail().withMessage('email is invalid'),
            check('name').not().isEmpty().withMessage('name can not be empty'),
            check('password').not().isEmpty().withMessage('password can not be empty')

        ]
    }


    LoginValidator(){
        return [
            check('email').isEmail().withMessage('email is invalid'),
            // check('name').not().isEmpty().withMessage('name can not be empty'),
            check('password').not().isEmpty().withMessage('password can not be empty')
        ]
    }
}