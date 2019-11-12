let express = require('express')

let app = express()


app.get("/",function(req,res){
    res.send("hello world")
})


app.get("/home",function(req,res){
    res.send("home页面")
})

app.get("/user",function(req,res){
    res.send({
        name:"zhangsn"
    })
})



app.listen(8082,function(){
    console.log('server start...')
})