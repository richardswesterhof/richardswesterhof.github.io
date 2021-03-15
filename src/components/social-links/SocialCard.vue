<!-- Created by Richard on 15/03/2021-->

<template>
  <!-- TODO: make this pretty-->
  <a :href="url" target="_blank" class="social-card">
    <font-awesome-icon :icon="icon" size="5x"></font-awesome-icon>
    <p>{{name}}</p>
  </a>
</template>

<script>
export default {
  name: "SocialCard",
  props: {
    icon: {
      type: Array,
      required: false,
      // despite what webstorm says, Vue requires objects to be instantiated literally instead of implicitly
      // (e.g. new Array() instead of [] or new Object() instead of {})
      default: () => new Array(),
    },
    url: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    }
  },

}
</script>

<style scoped>
  .social-card {
    display: inline-block;
    padding-left: 10pt;
    padding-right: 10pt;
  }
</style>