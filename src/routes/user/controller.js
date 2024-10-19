const controller = require('../controller')
const _ = require('lodash');
const uploaduserprofile = require('../../upload/uploaduserProfile')


module.exports = new (
    class extends  controller{
        async dashbord(req, res){
         res.send("dashboard")

        }

        async me(req, res){
          this.response({res, data: _.pick(req.user,["name", "email"])})
        
        }


        })();     