var mongoose = require('mongoose')

var db_url = "mongo ds117846.mlab.com:17846/mydb -u qasam -p qasam123"
// var db_url = process.env.DB_URL || 'mongodb://localhost:27017/mydb'

mongoose.connect(db_url, { useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function () { console.log('Successfully connected to DB') });