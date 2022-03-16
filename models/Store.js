const mongoose = require ('mongoose')
const schema = mongoose.Schema
const storeSchema = new schema({ 
 name :{type:String,required:true, unique:true },
 adresse:{type:String,required:true,unique:true},
 tel:{type:Number,required:true,unique:true},

 

})

module.exports =mongoose.model('store',storeSchema)