const express = require('express');
const cors = require('cors');
const app  = express();
const Routes = require('./config/routes');




// projext-name = POS 

// Password = 'GTeFh5zYwxeykVc1'

app.use(express.static(__dirname+"/assets"));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors());

app.use(Routes);

const Port = process.env.PORT || 8080 ;
app.listen(Port, ()=>{
    console.log(`Server Runing On This Port Number-${Port}`) 
});