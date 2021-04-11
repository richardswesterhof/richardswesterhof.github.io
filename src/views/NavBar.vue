<!-- Created by Richard on 15/03/2021-->

<template>
  <div class="navbar">
    <template v-for="(link, index) in links" v-bind:key="link.to.name">
      <router-link :to="link.to" class="nav-link">{{link.displayName}}</router-link>
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
          {to: {name: "Technologies"}, displayName: "Tech Stack"},
          {to: {name: "Curriculum Vitae"}, displayName: "CV"},
      ]
    }
  },
}
</script>

<style scoped>
.navbar {
  padding: 30px 10px 30px 10px;
}

.nav-link {
  padding: 0 8px 0 8px;
}
</style>