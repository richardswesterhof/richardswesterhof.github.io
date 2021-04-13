<!-- Created by Richard on 16/03/2021-->

<template>
  <ViewTab :title="isBirthday ? 'Yes!' : 'No'" :under-construction="false">
    <p v-if="isBirthday">I turn {{ new Date().getFullYear() - bYear }} today :)</p>
  </ViewTab>
</template>

<script>
import ViewTab from "@/views/ViewTab";
export default {
  name: "Birthday",
  components: {ViewTab},
  data() {
    return {
      bDay: 26,
      bMonth: 7,
      bYear: 1999,
    }
  },

  computed: {
    isBirthday() {
      // return true
      let date = new Date();
      return date.getDate() === this.bDay &&
             // getMonth starts at 0, so + 1 gets the expected number of a month (e.g. january should be 1 instead of 0)
             date.getMonth() + 1 === this.bMonth;
    },
  },
}
</script>

<style scoped>

</style>