var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);


io.on('connection',(socket)=>{
console.log('socket opened......')
})

server.listen(6969,()=>{
    console.log("server started......")
})