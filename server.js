var express = require('express');
var server = express();
var routes = require('./routes/routes');

var mongoose = require('mongoose');
const cors = require('cors');

//mongoose.set('strictQuery', false);//error



mongoose.connect("mongodb://localhost:27017/est",{useNewUrlParser: true, useUnifiedTopology: true },function checkDB(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("DB Connecteddddd!!!!!!!!")
    }
});

server.use(express.json());
server.use(routes);
server.use(cors());

server.listen(8000,function check(error)
{
    if(error){
        console.log("errorr")
    }
    else{
        console.log("startedd")
    }
});

