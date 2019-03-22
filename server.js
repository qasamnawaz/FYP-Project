var express = require('express');
var bodyParser = require('body-parser')
var Users = require('./models/user-schema')
var Products = require('./models/product-schema')
var Cartitems = require('./models/cart-schema')
var mongoose = require('./config/db-config');


var server = express();
var path = require('path'); 
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, '/build')));
if(process.env.NODE_ENV === 'production') {
    server.use(express.static(path.join(__dirname, '/build')));
    //
    server.get('*', (req, res) => {
      res.sendfile(path.join(__dirname = '/build/index.html'));
    })
  }
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
  })
// server.use('/', express.static(__dirname + './build'));
// server.use(express.static('./build'))
server.get('/',function(req,res){
    res.sendFile(__dirname+'/build/index.html');
  });

// server.get('/newproduct',(req,res)=>{
//     res.render('./build/index.html')
// })
server.post('/addInCart', (req, res) => {
    Cartitems.
    find({
        id: req.body.id,
    }).
    exec(function (err, item) {
        if (err) console.log(err);
        if(item.length ===0){
            const cartItem = new Cartitems({
                id:req.body.id,
                name:req.body.name,
                price:req.body.price,
                camera:req.body.camera,
                display:req.body.display,
                storage:req.body.storage,
                src:req.body.src,
                battery:req.body.battery,
                quan:req.body.quan,
            })
            cartItem.save(function(error){
                () => {console.log("item successfully saved into database.") }
            })
            res.send("Product is added in Cart");        
        }
        else{
            res.send("Product is already exit in Cart");
        }
    });
})
server.post('/updatequan', (req, res) => {

    Cartitems.findByIdAndUpdate({_id:req.body.id},{quan:req.body.value}).
    exec(function (err, item) {
        if (err) console.log(err);
        Cartitems.find({}, function(err, items) { 
            res.send(items);  
          });    
    })

})

    server.post('/payment', (req, res) => {
    const user = new Users({
        address:req.body.address,
        city:req.body.city,
        email:req.body.email,
        country:req.body.country,
        name:req.body.name,
        number:req.body.number,
        cvv:req.body.cvv,
        month:req.body.month,
        year:req.body.year,
        price:req.body.price,
        orderno:req.body.orderno,
        orderdate:req.body.orderdate,
    })
    user.save(function(error){
        () => {"User is stored in database"}
    }) 
    res.send(user);      
})
server.get('/carts', function(req, res) {
    Cartitems.find({}, function(err, items) { 
      res.send(items);  
    });
  });


server.post('/delItem', function(req, res) {
    Cartitems.findOneAndDelete({ _id: req.body.id }) 
        .exec(function(err, item) {      
            Cartitems.find({}, function(err, items) { 
                res.send(items);  
  });
        });
  });
  server.get('/clear', function(req, res) {
    Cartitems.deleteMany({},function(err){
        res.send("All items of Cart is deleted") 
    })
        });


  

server.use((err, req, res, next) => {
    console.warn(err)
    res.status(500).send("Error Catched by error handler.")
})
const port = process.env.PORT || 8000;
server.listen(port, () => console.log("server is running"))