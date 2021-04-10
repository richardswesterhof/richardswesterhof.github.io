<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <NavBar/>
        <router-view/>
      </v-container>

    </v-main>
  </v-app>
</template>

<script>

import NavBar from "@/views/NavBar";
export default {
  name: 'App',

  components: {
    NavBar
  },
};
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

/* remove the scrollbar automatically */
html {
  overflow-y: auto;
}

</style>