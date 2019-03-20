var mongoose = require( 'mongoose' )

const userSchema = { address:String,city:String,email:String,country:String,name:String,number:Number,cvv:Number,month:String,year:String,price:Number,orderno:Number,orderdate:String }

const Users = mongoose.model( 'User', userSchema );

module.exports = Users