import Vue from 'vue'
import App from './App.vue'
import router from './router'


require('swiper/dist/css/swiper.css');
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);

//引入VueRouter
import VueRouter from 'vue-router'
//明确使用VueRouter
Vue.use(VueRouter)

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
