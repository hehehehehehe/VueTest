
let fs = require('fs')

fs.writeFile("./user.txt", "寝室五爹带张鹏一个儿子！！！！", function () {
    console.log("写入完成")
})

fs.writeFileSync("./user.txt", "寝室五爹带张鹏一个儿子")