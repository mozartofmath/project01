var mongoc = require('mongodb').MongoClient;
var con = 'mongodb://localhost:27017/currencyConverter';

var USD_TO = {
    ETB : 27.57,
    POUND : 1/1.403541,
    EURO : 1/1.234553,
    YEN : 105.928551,
    YUAN : 6.334877,
    USD : 1,
    RUPEE : 65.286890,
    AUD : 1.297549,
    CAD : 1.307341,
    SPD : 1.316464,
    SWF : 0.950425,
    RINGGIT : 3.918358,
    DIRHAM : 3.6725,
    HKD : 7.84286,
    SHEKEL : 3.472616,
    BAHT  : 31.19,
    LIRA : 3.939336,
    RAND : 12.04475,
    SRIYAL : 3.75,
    NZD : 1.380805,
    RUBLE : 57.942524,
    SKWON : 1073.213797,
    

}

const coll = "rates";
mongoc.connect(con, (err,db)=>{
    console.log("connected to rates");
    const collection = db.collection(coll);

    collection.remove();
    collection.insertOne(USD_TO,(err,res)=>{
        if (err){console.log(err);}
        db.close(); 
    });
});