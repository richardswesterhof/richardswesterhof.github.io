<template>
  <NavBar ref="navbar"/>
  <router-view v-slot="{ Component }">
    <transition :name="transition" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>


</template>

<script>
import NavBar from "@/views/NavBar";

export default {
  components: {NavBar},

  data() {
    return {
      transition: "slide-left",
    }
  },
  //
  // mounted() {
  //   this.$nextTick(this.$refs.navbar.updateGradient)
  // }

  // watch the `$route` to determine the transition to use
  watch: {
    '$route' (to, from) {
      // construct a list of names of the links we have in the navbar
      let linkNames = this.$refs.navbar.links.map((link) => link.to.name)
      // if the link we are going to comes after the link we were at, slide left, else slide right
      this.transition = linkNames.indexOf(to.name) >= linkNames.indexOf(from.name) ?
          'slide-left' :
          'slide-right'

      this.$refs.navbar.updateGradient(linkNames.indexOf(to.name))
    }
  }
}
</script>

<style>
@import './css/global-definitions.css';


#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary-color);
  /* needed here to prevent scrollbars from showing up while transition is happening
     and because it doesn't work anywhere else :)
   */
  overflow: hidden;
}

</style>
