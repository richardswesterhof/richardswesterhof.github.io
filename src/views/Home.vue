<template>
  <div>
    <Hero/>

    <UnderConstruction></UnderConstruction>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue"
import UnderConstruction from "@/components/UnderConstruction";

export default {
  name: 'Home',
  components: {
    UnderConstruction,
    Hero
  }
}
</script>
