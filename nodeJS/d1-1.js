// 非阻塞代码写法：通过回掉函数实现无阻塞
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

//阻塞写法
// var data = fs.readFile('input.txt');
// console.log(data.toString());

console.log("程序执行结束!");