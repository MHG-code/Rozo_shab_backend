require('./database');
let http = require('http');
let express = require("express")
let app = express()

let base = require('./app/app')


let port = 8080;
let server = http.createServer(
    app.use('/', base)
    );
server.listen(port , () => console.log("Server run on port" , port));