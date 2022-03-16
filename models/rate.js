const mongoose= require ('mongoose')
const schema= mongoose.Schema
const rateSchema = new schema({

 value:Array ,
 productId: {type: mongoose.Schema.Types.ObjectId, ref:"Product"} }






)

module.exports= mongoose.model ('rate', rateSchema)