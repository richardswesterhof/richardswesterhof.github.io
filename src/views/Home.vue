<template>
  <ViewTab title="Richard Westerhof" :under-construction="true">
    <Hero/>
  </ViewTab>

</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import ViewTab from "@/views/ViewTab";

export default {
  name: 'Home',
  components: {
    Hero,
    ViewTab,
  }
}
</script>
