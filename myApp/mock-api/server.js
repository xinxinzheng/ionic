const express = require('express');
const app = express();
const fs = require('fs');
//读取文件列表
var fileList = fs.readdirSync(__dirname + '/mock-data');
//遍历文件列表
fileList && fileList.map(item => {
    var file = JSON.parse(fs.readFileSync(__dirname + '/mock-data/' + item));
    file && file.map(sitem => {
        //返回数据临时处理
        let res_tmp = {
            method: sitem.method.toLowerCase(),
            url: sitem.url,
            response: sitem.response
        };
        //根据请求类型，返回res
        app[res_tmp.method](res_tmp.url, (req, res) => {
            res.send(res_tmp.response)
        })
    })
})
app.listen('3000');
console.log('express is listening port 3000');