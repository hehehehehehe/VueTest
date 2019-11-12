import VueRouter from 'vue-router'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Paihang from './pages/paihang'
//import Hometuijian from './pages/Hometuijian'

let router = new VueRouter({
    routes: [
        {
            path: "/",redirect:"/home",
            component: Home
        },
        {
            path: "/home",
            component: Home
        },
        {
            path: "/paihang",
            component: Paihang
        },
        {
            name: "detail",
            path: "/detail",
            component: Detail
        },
        // {
        //     path: "/hometuijian",
        //     component: Hometuijian

        // }
    ]

})
export default router