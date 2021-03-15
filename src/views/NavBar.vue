<!-- Created by Richard on 15/03/2021-->

<template>
  <div class="navbar">
    <router-link :to="{name: 'Home'}">Home</router-link> |
    <router-link :to="{name: 'About'}">About</router-link> |
    <router-link :to="{name: 'Socials'}">Socials</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.navbar {
  padding: 30px;
}
</style>