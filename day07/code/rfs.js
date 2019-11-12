let fs = require('fs')

//异步读取
console.log(1)

fs.readFile("./hello.txt",function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(2)
        console.log(data.toString())
    }

})
console.log(3)

let result = fs.readFileSync("./hello.txt")
console.log(result.toString())
console.log(4)
