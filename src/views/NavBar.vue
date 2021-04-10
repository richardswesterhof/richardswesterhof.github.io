<!-- Created by Richard on 15/03/2021-->

<template>
  <div class="navbar">
    <template v-for="(link, index) in links" v-bind:key="link.to.name">
      <router-link :to="link.to">{{link.displayName}}</router-link>
      <template v-if="index < links.length - 1"> | </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      links: [
          {to: {name: "Home"}, displayName: "Home"},
          {to: {name: "About"}, displayName: "About"},
          {to: {name: "Socials"}, displayName: "Socials"},
          {to: {name: "Curriculum Vitae"}, displayName: "Curriculum Vitae"},
      ]
    }
  },
}
</script>

<style scoped>
.navbar {
  padding: 30px;
}
</style>