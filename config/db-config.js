var mongoose = require('mongoose')

var db_url =  process.env.MONGODB_URI  || "mongodb://qasam:qasam123@ds117846.mlab.com:17846/mydb"
// var db_url = process.env.DB_URL || 'mongodb://localhost:27017/mydb'
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/todos")
mongoose.connect(db_url, { useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function () { console.log('Successfully connected to DB') });