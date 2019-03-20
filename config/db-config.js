var mongoose = require('mongoose')

var db_url = "mongo ds117846.mlab.com:17846/mydb -u Qasam Nawaz -p qasamnawaz0304"
mongoose.connect(db_url, { useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function () { console.log('Successfully connected to DB') });