<!-- Created by Richard on 15/03/2021-->

<template>
  <!-- TODO: make this pretty (maybe? idk looks kinda alright the way it is right now tbh) -->
  <extended-router-link :to="url">
    <font-awesome-icon :icon="icon" size="5x"></font-awesome-icon>
    <p style="margin-top: 6px">{{name}}</p>
  </extended-router-link>
</template>

<script>
import ExtendedRouterLink from "@/components/ExtendedRouterLink";
export default {
  name: "SocialCard",
  components: {ExtendedRouterLink},
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

</style>