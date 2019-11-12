17344423362


NPM  是 Nodejs的包管理工具

1、 如果电脑上没有Nodejs
Nodejs下载地址：http://nodejs.cn/download/
安装好Nodejs后，会默认安装NPM
查看NPM是否安装 成功：   命令 行工具输入  ：  npm  -v
出现版本号，则表示npm安装成功

2、使用 NPM安装 vue-cli
安装命令 ： npm install -g @vue/cli

3、安装完后，在命令行输入 ：  vue  --version 查看vue-cli的版本，
如果看到版本号，说明安装 成功

4、创建 项目
进入到自己的工作目录
例如 day05


进入E盘
E:
cd  day05

5、创建项目：
vue  create hello

6、项目创建好之后，进入到项目目录下
cd  hello 
7、运行
npm  run serve



8. 安装 第三方包
axios

在项目目录下执行：
npm install axios --save

9. 在使用的地方引入：
import axios  from 'axios'

10.请求接口

import axios  from 'axios'

export default {

    data(){
        return{
            movies:[]
        }
    },
    mounted(){
        axios.get("https://easy-mock.com/mock/5d1c66e9e85bc1461e567f67/api/books")
        .then( res =>{
            this.movies = res.data.collections
        })

    }
}


11、使用 v-for渲染结果

<ul>
    <li v-for="m in movies"  :key="m.id">

        {{m.title}}
    </li>
</ul>


12 如果安装npm包很慢

1、设置 淘宝镜像：
npm config set registry https://registry.npm.taobao.org

2、安装 nrm 
npm i -g nrm



导入git项目 需执行 npm install 下载  node_modules 文件

nrm ls 显示一个镜像列表
nrm use taobao

npm i "某个包"



1/vue-router
2/Nodejs/npm
3/express nodejs web框架   
SSM
4、综合项目练习  
积分商城

MongoDB  / Mysql
nosql  