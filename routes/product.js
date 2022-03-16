
const express = require('express')
const isAuth=require('../middlewars/isAuth')
const productRoute = express.Router()
const Product= require('../models/Product')
const upload=require('../middlewars/upload')


// add new Product
productRoute.post('/ajouter',isAuth,upload.single('myProduct'),async(req,res)=>{
    let {name,type,description,rate,disponibilite,storeName} = req.body
    
      rate=Number(rate)
    if(!req.file){
   return res.status(400).send('Error no file')
    }
   
    let imageUrl=req.file.filename
    try {
     const userProduct = new Product({
   
           name, 
           type,
           description,
           rate,
           disponibilite,
           imageUrl,
           storeName
          
          })
   
    await userProduct.save()
   res.send("product uploaded");
    } catch (error) {
     res.status(500).send("server error")   
        
    }
   
   
   })

   // get all products
   productRoute.get("/produit", async(req,res)=>{
   try {
    const products= await Product.find()
    res.send(products)
   } catch (error) {
    res.status(500).send("serv error")  
   }


   })

     
  
// update product
productRoute.put("/modifier/:productId",isAuth,upload.single("myProduct"),async(req,res)=>{
    const {productId}= req.params
    try {
      await Product.findByIdAndUpdate(productId,{$set:{...req.body}})
      res.send('product updated')
    } catch (error) {
        res.status(500).send("server error") 
    }})
/// get one product by id
  productRoute.get('/produit/:productId',async(req, res)=>{
    const {productId}= req.params;
    try {
        const product= await Product.findById(productId)
        res.send(product)

         
    } catch (error) {
        res.status(500).send("server error")  
        
    }

})



// rate
   productRoute.put('/produit/rate/:productId',async(req, res)=>
   {const {productId} = req.params;
   try {
       const product= await Product.findByIdAndUpdate(productId,{$set:{rate:req.body.rate}});
       res.send({message:"rate update",product});
       
   } catch (error) {
       res.status(500).send("server error");
       
   }
   
   })
    
   
   productRoute.delete('/produit/:productId',async(req, res) =>
   { const {productId}= req.params;
   try { 
       await Product.findByIdAndDelete(productId);
       res.send ("Product deleted")
       
   } catch (error) {
       res.status(500).send("server error")
     
   }
   
   })



module.exports=productRoute 