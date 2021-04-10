<!-- Created by Richard on 16/03/2021-->

<template>
  <template v-if="isBirthday"><h1>Yes! I turn {{new Date().getFullYear() - bdayYear}} today</h1></template>
  <template v-else><h1>No</h1></template>
</template>

<script>
export default {
  name: "Birthday",


  data() {
    return {
      bdayDay: 26,
      bdayMonth: 7,
      bdayYear: 1999,
    }
  },

  computed: {
    isBirthday() {
      let date = new Date();
      return date.getDate() === this.bdayDay &&
             // getMonth starts at 0, so + 1 gets the expected number of a month (e.g. january should be 1 instead of 0)
             date.getMonth() + 1 === this.bdayMonth;
    },
  },
}
</script>

<style scoped>

</style>