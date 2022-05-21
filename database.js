require('dotenv').config();
const mongoose = require('mongoose');
const assert = require('assert');
const console = require('console');
const db_url = process.env.MONGO_URI;

mongoose.connect(db_url,{
    useNewUrlParser : true,
    // useCreateIndex : true,
    useUnifiedTopology : true,
    // useFindAndModify: false
}).then(()=>{
    console.log('database connected')
}).catch((error)=>{
    console.log(error)
})