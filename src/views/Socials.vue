<!-- Created by Richard on 15/03/2021-->

<template>
  <ViewTab title="You can find me on:">
    <template v-for="social in socials" :key="social.name">
      <SocialCard :icon="social.icon" :name="social.name" :url="social.url" class="social-card"/>
    </template>
  </ViewTab>
</template>

<script>
import socials from "@/config/socials.json"
import SocialCard from "@/components/SocialCard";
import ViewTab from "@/views/ViewTab";

export default {
  name: "Socials",
  components: {ViewTab, SocialCard},

  data() {
    return {
      socials: socials,
    }
  },
}
</script>

<style scoped>
.social-card {
  display: inline-block;
  padding-left: 14pt;
  padding-right: 14pt;
}
</style>