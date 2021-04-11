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

  // watch the `$route` to determine the transition to use
  watch: {
    '$route' (to, from) {
      // construct a list of names of the links we have in the navbar
      let linkNames = this.$refs.navbar.links.map((link) => link.to.name)
      // if the link we are going to comes after the link we were at, slide left, else slide right
      this.transition = linkNames.indexOf(to.name) >= linkNames.indexOf(from.name) ?
          'slide-left' :
          'slide-right'
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

a {
  font-weight: bold;
  color: var(--primary-color);
  text-decoration: none;
}

a.router-link-exact-active {
  color: var(--secondary-color);
}

/* stuff to make transitions look very nice */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 275ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translate(2em, 0);
  overflow: hidden;
}

.slide-left-leave-to,
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-2em, 0);
  overflow: hidden;
}

h1 {
  border-radius: 10px;
  width: fit-content;
  margin: 0 auto 16px auto;
  padding: 4px 16px;
  color: white;
  font-weight: lighter;
  background: rgb(44,62,80);
  background: linear-gradient(135deg, rgba(44,62,80,1) 0%, rgba(80,129,185,1) 100%);
}

</style>
