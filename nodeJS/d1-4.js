var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('req');
    res.send('Hello World');
})
app.get('/get', function (req, res) {
    res.send('get');
})
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})