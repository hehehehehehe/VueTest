<template>
  <div>
 <ul>
     <li v-for="m in movies" :key="m.id"> 
         {{m.title}}
    </li>
</ul>

  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            movies:[]
        }

    },
    mounted(){
        axios.get("./movies.json")
        .then(res=>{
            this.movies = res.data.subjects
        })

    }

}
</script>

<style>
ul{
    list-style: none;
    line-height: 50px;
    
   
   
}
li{
 border-bottom: solid 1px rgb(93, 92, 92);

}

</style>