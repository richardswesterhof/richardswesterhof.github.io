<!-- Created by Richard on 13/04/2021-->

<template>
  <div>
    <h1>{{title}}</h1>
    <UnderConstruction v-if="underConstruction"></UnderConstruction>
    <slot/>
  </div>
</template>

<script>
import UnderConstruction from "@/components/UnderConstruction";

export default {
  name: "ViewTab",
  components: {UnderConstruction},

  props: {
    title: {
      type: String,
      required: true,
    },
    underConstruction: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

}
</script>

<style scoped>

</style>