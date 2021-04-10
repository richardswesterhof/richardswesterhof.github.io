<!-- Created by Richard on 15/03/2021-->

<template>
  <div class="socials">
    <h1>
      You can find me on:
    </h1>
    <template v-for="social in socials" :key="social.name">
      <SocialCard :icon="social.icon" :name="social.name" :url="social.url"/>
    </template>
  </div>


</template>

<script>
import socials from "@/config/socials.json"
import SocialCard from "@/components/SocialCard";

export default {
  name: "Socials",
  components: {SocialCard},

  data() {
    return {
      socials: socials,
    }
  },
}
</script>

<style scoped>

</style>