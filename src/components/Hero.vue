<!-- Created by Richard on 15/03/2021-->

<template>
  <h1>
    Richard Westerhof
  </h1>
  <h2>
    {{nestedPropertyExists($store, "state", "strings", "hero", "subtext") ? $store.state.strings.hero.subtext : "[ERROR]"}}
<!--    The man, the myth, the legend-->
  </h2>
</template>

<script>
import nestedUtils from "@/utils/nestedUtils"

export default {
  name: "Hero",

  methods: {
    nestedPropertyExists: nestedUtils.nestedPropertyExists,
  }
}
</script>

<style scoped>

</style>