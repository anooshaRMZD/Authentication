const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const userRouter = require('./user');
const adminRouter = require('./admin');
const {isLoggined} = require('./../middelware/auth');
const error = require('./../middelware/error')

router.use('/auth' , authRouter);
router.use('/user' , isLoggined, userRouter);
router.use('/admin' , isLoggined, adminRouter);


router.all('*' , async(req, res, next)=>{
    console.log('404')
})

// error middel ware
router.use(error)

module.exports = router
