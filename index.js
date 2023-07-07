//Rest API demo in node.js

// var express = require('express');
// var app = express();
// var fs = require('fs');

// app.get('/getUsers', function(req,res){
//     fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err,data){
//         console.log(data);
//         res.end(data);
//     });

// })

// var server = app.listen (8080, function(){
//     var host = server.address().address
//     var port = server.address().port
//     console.log("REST API demo app ",host,port)
// })

//after

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("users.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);

server.listen(port);