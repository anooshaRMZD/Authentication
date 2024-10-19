const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp')

const userSchema = new mongoose.Schema({
    name:{ type:String , required: true},
    email:{ type:String , required: true , unique:true},
    password:{ type:String , required: true,
    //      validate:{
    //          validator:
    //         function (passwordValue) {
    //             const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9!@#$%^&*]{6-100}$/;
    //             return regex.test(passwordValue)
    //         },
    //         message:"password must contain at least one uppercase letter, one lowercaseletter, one numberParser, one special character, and be between 6 and 24characters long"
        
    // }
},
    isadmin:{ type: Boolean, default:false}
    
});
userSchema.plugin(timestamp);
const User = mongoose.model('User', userSchema);  
module.exports = User