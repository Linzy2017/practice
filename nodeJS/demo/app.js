/**
 * express 基础配置
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var app = express();

// 设置模板类型，将ejs模板转化成html形式
app.set('view', path.join(__dirname, 'view'));
app.engine('html',ejs.__express);
app.set('view engine', 'html');

// 其他配置
app.use(logger('dev'));  // 打印到控制台
//将client提交过来的post请求放入request.body中，json这个方法返回一个仅仅用来解析json格式的中间件，
app.use(bodyParser.json());
// urlencoded解析body中的urlencoded字符， 只支持utf-8的编码的字符,也支持自动的解析gzip和 zlib
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); // 使用cookie
app.use(express.static(path.join(__dirname, 'static'))); // 指定公共资源文件夹 static/

