var express = require('express');
var app = express();

var mongoc = require('mongodb').MongoClient;
var con = 'mongodb://localhost:27017/currencyConverter';

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/index.html');
});

app.get("/:from/:to",function(req,res){
    var frm = req.params['from'];
    var to  = req.params['to'];

    var coll = "rates";
    mongoc.connect(con, (err,db)=>{
        console.log("connected successfully");
        const collection = db.collection(coll);

        collection.find({}).toArray((err, docs) => {
            
            db.close();
            var USD_TO = docs[0];
            var rate = USD_TO[to]/USD_TO[frm];
            res.send({"rate": rate});
        
        })
    })
})
console.log("http://localhost:4200")
app.listen(4200);