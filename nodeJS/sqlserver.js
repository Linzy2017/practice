/**
 * Created by LQZ on 2017/10/18.
 */

//Nodejs连接12种数据库例子集合
//https://segmentfault.com/a/1190000008753686

var mssql = require('./db.js');
var express = require('express');
var bodyParser = require("body-parser");  //用于获取post里面的数据
var app = express();

var cdata = ''

app.use(bodyParser.urlencoded({ extended: false }));

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.post('/change', function (req, res) {
    console.log(req.ip)
    var conn = new mssql.mssql({'userName':'sa','password':'a123654','server':'127.0.0.1','options':{'database':'wuye'}});
    var sqlString = "INSERT INTO PayOrder (PayType, PayMoney, PayTime,PayWay, accountNumber) VALUES ('" +
        req.body.type+"', '" +
        req.body.money+"', '" +
        req.body.time+"', '" +
        req.body.way+"', '" +
        req.body.name+"')"
    conn.query(sqlString , function(err,data){
            if(!err){
                res.send(data)
            }
            else {
                console.log(err)      //出错返回
            }
        }
    )
})
app.get('/', function (req, res) {
    var conn = new mssql.mssql({'userName':'sa','password':'a123654','server':'127.0.0.1','options':{'database':'wuye'}});
    conn.query('select * from PayOrder', function(err,data){
            if(!err){
                res.send(data)
            }
            else {
                console.log(err)      //出错返回
            }
        }
    )
})
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://localhost:%s", port)

})