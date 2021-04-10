<template>
  <NavBar/>
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

  // quick ugly fix to trigger language action on page load
  created() {
    this.$store.dispatch("changeLanguagePack", {language: "english"});
  },

  data() {
    return {
      transition: "fade",
    }
  },

  // watch the `$route` to determine the transition to use
  // watch: {
  //   '$route' (to, from) {
  //     const toDepth = to.path.split('/').length
  //     const fromDepth = from.path.split('/').length
  //     this.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  //   }
  // }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<!--<style lang="sass">-->

<!--.slide-left-enter-active,-->
<!--.slide-left-leave-active,-->
<!--.slide-right-enter-active,-->
<!--.slide-right-leave-active-->
<!--  transition-duration: 0.5s-->
<!--  transition-property: height, opacity, transform-->
<!--  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1)-->
<!--  overflow: hidden-->

<!--.slide-left-enter,-->
<!--.slide-right-leave-active-->
<!--  opacity: 0-->
<!--  transform: translate(2em, 0)-->

<!--.slide-left-leave-active,-->
<!--.slide-right-enter-->
<!--  opacity: 0-->
<!--  transform: translate(-2em, 0)-->

<!--</style>-->