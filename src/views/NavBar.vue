<!-- Created by Richard on 15/03/2021-->

<template>
  <div class="navbar" id="navbar_container">
    <template v-for="(link, index) in links" v-bind:key="link.to.name">
      <extended-router-link
          :to="link.to"
          :id="navLinkIdPrefix + link.to.name"
          active-class="with_background active"
          inactive-class="without_background"
          class="nav-link"
      >
        {{link.displayName}}
      </extended-router-link>
      <template v-if="index < links.length - 1"> | </template>
    </template>
  </div>
</template>

<script>
import ExtendedRouterLink from "@/components/ExtendedRouterLink";
export default {
  name: "NavBar",
  components: {ExtendedRouterLink},
  data() {
    return {
      links: [
          {to: {name: "Home"}, displayName: "Home"},
          {to: {name: "About"}, displayName: "About"},
          {to: {name: "Socials"}, displayName: "Socials"},
          {to: {name: "Technologies"}, displayName: "Tech Stack"},
          {to: {name: "Curriculum Vitae"}, displayName: "CV"},
          // {to: {name: "Test"}, displayName: "Test"},
      ],

      navLinkIdPrefix: "navbar_link_",

      bboxes: []
    }
  },

  mounted() {
    this.links.forEach(link => {
      this.bboxes.push(this.getBoudingBox(document.getElementById(this.navLinkIdPrefix + link.to.name)))
    });
  },

  methods: {
    getBoudingBox(el) {
      let left = 0;
      let top = 0;
      let currEl = el
      while(currEl && !isNaN(currEl.offsetLeft) && !isNaN(currEl.offsetTop)) {
        left += currEl.offsetLeft - currEl.scrollLeft;
        top += currEl.offsetTop - currEl.scrollTop;
        currEl = currEl.offsetParent;
      }
      return {left: left, top: top, right: left + el.offsetWidth, bottom: top + el.offsetHeight};
    },

    // unfortunately doing dynamic gradients isn't really working
    // might revisit this sometime in the future though
    updateGradient(/* activeIndex */) {
      // if(activeIndex < 0) return
      // let navbar = document.getElementById('navbar_container');
      // console.log(navbar)
      // // let docStyle = getComputedStyle(document.body);
      // let rotation = 0;
      // let bbox = this.bboxes[activeIndex]
      // // let primaryColor = docStyle.getPropertyPriority("--primary-color");
      // let primaryColor = "#2c3e50"
      // // let secondaryColor = docStyle.getPropertyPriority("--secondary-color");
      // let secondaryColor = "#5081b9";
      // let newBgImg = `-webkit-linear-gradient(${rotation}deg, ${primaryColor} ${bbox.left}px, ${secondaryColor} ${bbox.left}px, ${secondaryColor} ${bbox.right}px, ${primaryColor} ${bbox.right}px)`;
      // navbar.style.background = newBgImg
      // console.log("updated navbar to have bg img", newBgImg)
      //
      // this.links.forEach(link => {
      //   let element = document.getElementById(this.navLinkIdPrefix + link.to.name)
      //   element.classList.remove("gradient-text")
      //   element.classList.add("gradient-text")
      // });
      //
      // navbar.classList.remove("gradient-text")
      // navbar.classList.add("gradient-text")
    }
  },
}
</script>

<style scoped>

</style>