<template>
  <div>
    <!-- <ul>
      <li v-for="m in movies" :key="m.id">
       
        {{m.title}}
      </li>
    </ul> -->


    <Book   v-for="m in movies" :key="m.id"  :data="m"></Book>
  </div>
</template>

<script>

import axios  from 'axios'
import Book from './Book'

export default {

    components:{
        Book
    },
    data(){
        return{
            movies:[]
        }
    },
    mounted(){
        axios.get("https://easy-mock.com/mock/5d1c66e9e85bc1461e567f67/api/books")
        .then( res =>{
            // console.log(res)
            this.movies = res.data.collections
        })

    }

}
</script>

<style>
ul {
  list-style: none;
}
ul li {
  border-bottom: solid 1px #aaa;
  height: 60px;
  line-height: 60px;
}
</style>