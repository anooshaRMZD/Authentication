const controller = require('./../controller')
const _ = require('lodash');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const user = require('./../../models/user');

module.exports = new (
    class extends  controller{
        async register(req, res){
            let user = await this.User.findOne({email: req.body.email});
            if(user){
                return this.response({
                    res, code:400, message:'this user already registered'
                })
            }

             const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
            
               // const {email, name, password } = req.body;
            // user = new this.User({email , name , password});
            user = new this.User(_.pick(req.body, ["name" , "email" , "password"]));
            await user.save();

            this.response({
                res , message: 'successfully registered',code:200,
                data: _.pick(user, [,  "name" , ])
            });

        }
        async login(req, res){
           const user =  await this.User.findOne({email: req.body.email});
            if(!user){
                return this.response({
                    res, code:400, message: 'invalid email or password'
                });
            }
            const isValid = await bcrypt.compare(req.body.password, user.password)
            if(!isValid){
                return this.response({res, code:400, message: 'invalid email or password'})
            }
            const token = jwt.sign({_id: user.id} , config.get("jwt_key"))
            this.response({res, message:'succesfully loged in', data: {token}})
        }
        })();     