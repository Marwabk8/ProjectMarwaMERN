const express= require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const Store = require('../models/Store')
const storeRoute = express.Router()

storeRoute.post('/stores', async(req,res)=>{
 let {name,adresse,tel}= req.body
  tel=Number(tel)

 try {
 const store = new Store({
    name,
    adresse,
    tel,

 })

 await store.save()
 res.send({message:"store added",store})
     
 } catch (error) {
    res.status(500).send("server error")
 }

})

storeRoute.get('/stores',async(req,res)=>{
try {
 const stores = await Store.find()
 res.send(stores)
} catch (error) {
    res.status(500).send("sever error")  
}

})


storeRoute.delete('/stores/:storeId',async(req, res) =>
{ const {storeId}= req.params;
try { 
    await Store.findByIdAndDelete(storeId);
    res.send ("store deleted")
    
} catch (error) {
    res.status(500).send("server error")
  
}

})


storeRoute.put('/store/:storeId',async(req,res)=>
{ const{storeId} =req.params;

try {
   const store= await Store.findByIdAndUpdate(storeId,{$set:{...req.body}});
   res.send({message:"product update",store}); 
} catch (error) {
   res.status(500).send("server error"); 
}



})


module.exports = storeRoute