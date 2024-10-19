const mongoose = require('mongoose');
const bannerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        data:Buffer,
        contentType:String
    },
    createAt:{
        type: Date,
        default:Date.now
    }
});

const Banner = mongoose.model('Banner', bannerSchema);  
module.exports = Banner