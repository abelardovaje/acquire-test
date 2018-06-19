var express = require('express');
var path = require('path');
var app = express()
var http = require('http');
var server = http.createServer(app);
app.use("/public", express.static(__dirname + '/public'));
app.use("/node_modules", express.static(__dirname + '/node_modules'));
app.use('/',express.static(__dirname+'/resources/views'));
// respond with "hello world" when a GET request is made to the homepage

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, './', 'index.html'));
})

server.listen(9000,function(){
	console.log('listening to port 9000');
});