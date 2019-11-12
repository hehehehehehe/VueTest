/*
 创建简单的http服务器
*/


let http = require('http')

http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<head><meta charset='utf-8'/></head>")
    res.end("<h1>寝室五爹带张鹏一个儿子！！！！</h1>")
}).listen(8081,function(){
    console.log('服务器启动成功！！！')
})