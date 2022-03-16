const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const userSchema= require('../models/auth')
const authRoute= express.Router()
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken')
const { RegisterValidation, Validator } = require("../middlewars/validition")
const isAuth = require("../middlewars/isAuth")

authRoute.post('/Sginup', RegisterValidation, Validator, async (req,res)=>{
     const {email,password}= req.body

     try {
      const user= new userSchema(req.body)
      const found= await userSchema.findOne({email})
      if (found) {return res.status(400).send('user alreday exist')}

      const salt=10
      const  hashedpassword = bcrypt.hashSync(password, salt)
      user.password = hashedpassword
      const payload ={_id: user._id}
     const token= jwt.sign(payload, process.env.secreToken)
    
      await user.save() 

      res.status(200).send({msg:'user registred', user,token})

     } catch (error) {

        res.status(500).send({error:[{msg:'could not registre'}]})
         
     }
    })

    authRoute.post('/signIn',    async (req,res)=>{
        const {email,password}=req.body
        
            try {
        
                const user = await userSchema.findOne({email})
                if (!user) {return    res.status(400).send({errors:[{msg:"bad credentials"}]}) }
                const match = bcrypt.compareSync(password, user.password)
                if (!match)  {return   res.status(400).send({errors:[{msg:"bad credentials"}]})  }
        
                const payload = {_id:user._id}
        const token = jwt.sign(payload, process.env.secreToken)
                res.status(200).send({msg:"login successed", user, token})
                
            } catch (error) {
                res.status(500).send({ errors:[{msg:'could not login'}]  })
            }
        } )
        authRoute.get('/marwa',isAuth,(req,res)=>  res.send(req.user)  )
        
 module.exports=authRoute