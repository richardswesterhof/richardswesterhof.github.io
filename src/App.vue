<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from "@/views/NavBar";

export default {
  components: {NavBar},

  // quick ugly fix to trigger language action on page load
  created() {
    this.$store.dispatch("changeLanguagePack", {language: "english"});
  }
}
</script>

<style>
@import './css/global-definitions.css';


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary-color);
}

a {
  font-weight: bold;
  color: var(--primary-color);
}

a.router-link-exact-active {
  color: var(--secondary-color);
}
</style>