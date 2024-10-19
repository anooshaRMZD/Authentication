// // require('dotenv').config()
// const express = require('express');
// const app = express();
// const cors = require('cors');
// let users = require('./users');
// const { validateSignup } = require("./validator")
// const joi = require('joi');

// //middel ware
// app.use(express.json());     // for parsing application/json
// app.use(express.urlencoded({extends:true}));
// app.use(cors());
// console.log("NODE_ENV: " , process.env.NODE_ENV); //if unset returns undifined
// console.log(app.get("env"));  //if unset returns development

// // restful api
// app.get('/api/users', (req,res)=>{
//    // res.json(users)
//    res.json({
//        data: users,
//        message: "ok"
//    })
// })
// app.get('/api/users/:id', (req,res)=>{
   
// //   const user =users.find((u)=>u.id==req.params.id)                         req.params.id typeof== string & id typof== number
//   const user =users.find((u)=>u.id===parseInt(req.params.id))
//   if(!user)return res.status(404).json({
//     data: null,
//     message:"the given id wasn't found"
//   })
//    res.json({
//        data: user,
//        message: "ok"
//    })
// })

// app.get('/' , (req,res)=>{
//     res.json('hello word');
// });



// // storage data on ram
// app.post('/users',  (req,res)=>{
//     // const {error , value} = signupSchema.validate(req.body)



//    //  const {error , value} = validateSignup(req.body)
//    // if(error){
//    //  console.log(error);
//    //  return res.status(404).send(error.details[0].message)
//    //
//    // }

//     users.push({
//         id: users.length +1,
//         ...req.body           //Spread 
//     })
//     res.json({
//         data: users,
//         message:"new record added"
//     })
// })
// app.patch('/api/users/:id', (req,res)=>{
//     const {error , value} = validateSignup(req.body)
//     if(error){
//         console.log(error);
//         return res.status(404).send(error.details[0].message)
//        }

//     users = users.map(user=>{
//         if( user.id == req.params.id){
//           return{...user , ...req.body} 
//         }
//         return user;
//     })
//     res.json({
//         data: users,
//         message:"new record added"
//     })
// });

// app.delete('/api/users/:id' , (req , res)=>{
//     const user = users.find( user => user.id == req.params.id)

//     if(!user){
//         return res.status(404).json({
//         data: null,
//         message: "the given id wast in users"
//     })
//     }
//    const index =  users.indexOf(user);
//    users.splice(index , 1)
//    res.json({
//     data: users,
//     message:" record delete"
// })
// })


// app.listen(3000 , ()=>{
//     console.log('listen on port 3000')
// });
