import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import 'swiper/dist/css/swiper.css';
//import 'swiper/dist/js/swiper.js';

//引入VueRouter
import VueRouter from 'vue-router'
//明确使用VueRouter
Vue.use(VueRouter)

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
