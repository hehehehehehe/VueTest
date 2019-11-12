<template>
  <div>
    <h1>详情页 {{id}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0
    };
  },
  mounted() {
    let id = this.$route.params.id;
    this.id = id;
  }
};
</script>

<style>
</style>