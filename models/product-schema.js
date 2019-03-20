var mongoose = require( 'mongoose' )

const productSchema = { id: Number, name: String, price: Number, display:Number,battery:Number,camera:String,storage:String,src:String}

const Products = mongoose.model( 'product', productSchema );

module.exports = Products