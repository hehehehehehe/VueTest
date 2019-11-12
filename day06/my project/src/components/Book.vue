<template>
  

  <div>

      <div>
          <img :src="data.cover.url" alt="">
      </div>

      <div>
          {{data.title}}
      </div>

  </div>
</template>

<script>
export default {
    props:["data"]
}
</script>

<style>

</style>