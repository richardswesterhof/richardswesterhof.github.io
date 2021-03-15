<!-- Created by Richard on 15/03/2021-->

<template>
  <h1>Whoops, that page couldn't be found :(</h1>
  <div class="navigation-links">
    <a @click="goBack" style="display: inline-block; cursor: pointer">Previous Page</a> |
    <router-link :to="{name: 'Home'}"><div style="display: inline-block">Home</div></router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",

  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>

</style>