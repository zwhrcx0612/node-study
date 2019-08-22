const fs = require('fs');
fs.readFile('input.txt',(err, data) => {
    if(err) console.log("err");
    console.log(data.toString())
});
console.log("结束")


// 执行结果 
// 结束
// My name is zhangwh