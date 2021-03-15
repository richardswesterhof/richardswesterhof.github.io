<!-- Created by Richard on 15/03/2021-->

<template>
  <p>Whoops, that page couldn't be found :(</p>
  <div><div @click="goBack">return to the previous page</div> | <router-link to="/"><div>go home</div></router-link>
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