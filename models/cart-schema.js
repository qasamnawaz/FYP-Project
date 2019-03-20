var mongoose = require( 'mongoose' )

const cartSchema = { id: Number, name: String, price: Number, display:Number,battery:Number,camera:String,storage:String,src:String}

const Cartitems = mongoose.model( 'cartitem', cartSchema );

module.exports = Cartitems;