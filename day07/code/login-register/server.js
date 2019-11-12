let express = require('express')
let fs = require('fs')

let app = express()

// 返回注册页
app.get("/",(req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

// 处理注册请求
app.get("/regist",(req,res)=>{
    console.log('user regist',req.query)
    let username = req.query.username;
    let pwd = req.query.pwd;

    let user = {
        id:Math.random().toString(16).slice(2),
        username: username,
        pwd:pwd
    }
    fs.writeFile("./db.json",JSON.stringify(user),()=>{
        console.log('数据保存成功')

        // res.send({msg:"成功"})

        res.redirect("/tologin")
    })

})


// 返回登录页
app.get('/tologin',(req,res) =>{
    res.sendFile(__dirname + '/login.html')
})

// 处理登录请求
app.get('/login',(req,res) =>{
    let username = req.query.username;
    let pwd = req.query.pwd;

    fs.readFile("./db.json",(err,data) =>{
        if(err){

        }else{
            let str = data.toString()
            let user = JSON.parse(str)

            // console.log(username,pwd)
            // console.log(user)
            if(user.username === username && user.pwd === pwd){
                res.redirect('/success')
            }else{
                res.redirect("/tologin")
            }
        }
    })
})

// 返回主页
app.get('/success',(req,res) =>{
    res.sendFile(__dirname + '/success.html')
})

app.listen('8082',()=>{
    console.log('服务器启动成功')
})