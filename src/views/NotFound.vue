<!-- Created by Richard on 15/03/2021-->

<template>
  <ViewTab title="Whoops, that page couldn't be found :(" :under-construction="false">
    <!-- TODO: make this a navbar class -->
    <div>
      <a @click="goBack" style="display: inline-block; cursor: pointer">Previous Page</a> |
      <router-link :to="{name: 'Home'}"><div style="display: inline-block">Home</div></router-link>
    </div>
  </ViewTab>
</template>

<script>
import ViewTab from "@/views/ViewTab";
export default {
  name: "NotFound",
  components: {ViewTab},
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>

</style>