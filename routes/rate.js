const express = require('express')

const rateRoute = express.Router()
const rateSchema= require('../models/rate')

rateRoute.post('/:id/rate', async(req,res)=> {
const {id}=req.params
    try {
       const rate= await rateSchema.findOne({productId:req.params.id})
       if( rate) {    rate.value.push(req.body.value) 
       await rate.save()
    return   res.status(200).send(rate)}

      else  { const rating= new rateSchema({...req.body,productId:id})
        await rating.save()  
        res.status(200).send({msg:"rate success",rating})}
    } catch (error) {
        res.status(500).send(error)
    }
         })




rateRoute.get('/:id/rating',async(req,res)=>{
     try {
         const ratings= await rateSchema.findOne({productId:req.params.id}).populate("productId")
         res.send(ratings)
     } 
     catch (error) {
         res.status(500).send("server error")
     }
     
     })

     module.exports=rateRoute