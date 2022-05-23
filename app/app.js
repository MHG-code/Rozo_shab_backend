let express = require("express");
let app = express();
let bodyParser = require('body-parser');
const cors = require("cors");
const main = require('./main/route/api');
const user = require('./user/route/api');

const admin = require('./Administrator/route/api');



app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());
app.use('/' , main);

app.use('/user' , user);

app.use('/admin' , admin);





module.exports =app