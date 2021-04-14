<!-- Created by Richard on 11/04/2021-->

<template>
  <ViewTab title="Technologies used on this page:" :under-construction="true">
    <p>
      This page was built using Vue 3.<br>
      Currently no css framework is used; all of the styling is done in raw css, though this may change at some point.
    </p>
    <p>
      This page is automatically built and deployed from my GitHub repository using GitHub Actions.<br>
      The source code is openly available at <extended-router-link to="https://github.com/richardswesterhof/richardswesterhof.github.io" :display-url="true"/>
    </p>

  </ViewTab>
</template>

<script>
import ViewTab from "@/views/ViewTab";
import ExtendedRouterLink from "@/components/ExtendedRouterLink";

export default {
  name: "Technologies",
  components: {ExtendedRouterLink, ViewTab},
}
</script>

<style scoped>

</style>