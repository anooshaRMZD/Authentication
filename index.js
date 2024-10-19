require('express-async-errors')
const express = require('express');
const app = express();

// const {connect} = require('mongoose');
const mongoose = require('mongoose');
const debug = require('debug')("app:main");
const config = require('config');
const winston = require('winston')

const router = require('./src/routes');


require('./startup/config')(app, express);
require('./startup/db')();
require('./startup/logging')

app.use('/api' , router)

const port =  process.env.PORT || 5000;
app.listen(port , ()=> console.log(`listening on port ${port}`))