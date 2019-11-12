<template>
  <div id="app">
    <qqHeader></qqHeader>
    <!-- 1、添加链接 -->
    <nav>
      <router-link to="/home">推荐</router-link>
      <router-link to="/paihang">排行</router-link>
    </nav>
    <!-- 2、 router-view -->
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
import qqHeader from "./components/qqHeader";
export default {
  name: "app",
  components: {
    qqHeader
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: flex;
  box-shadow: 0 10px 20px rgb(235, 232, 232);
  padding: 0;
  margin: 0;
  position: fixed;
  top: 44px;
  background: #fff;
}
nav a {
  flex: 1;
}
a {
  text-decoration: none;
  color: #888;
}
.router-link-exact-active{
  color: rgba(34,213,156,1);
  border-bottom: solid 2px rgba(34,213,156,1);
}
.router-view{
  margin-top: 88px;
}
</style>
