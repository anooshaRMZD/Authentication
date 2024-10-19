const mongoose = require('mongoose');
const debug = require('debug')("app:main");
const config = require('config');

module.exports = function () {
    
//  "mongodb://127.0.0.1:27017/kiaraProject"
mongoose
.connect (config.get('db.address'), {useNewUrlParser: true})
.then(()=> debug('connected to mongodb successfully'))
.catch((err)=> debug('not connected to mongodb'))  

}