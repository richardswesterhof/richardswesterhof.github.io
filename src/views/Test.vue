<!-- Created by Richard on 12/04/2021-->

<template>
  <ViewTab title="This page is used for testing new things">
    <h4>It is not meant to be in production</h4>

    <div :class="'test_div ' + (isClicked ? 'with_background ' : 'without_background ')" style="border-color: black; border-width: 1px; border-style: solid">this has a rising background</div>

    <br>

    <button @click="isClicked = !isClicked">{{ isClicked }}</button>

    <br>

    <p style="display: inline-block;background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));background-clip: text; -webkit-background-clip: text; color: transparent;">some text with gradient color</p>

    <div class="topbar" style="color: white;">some text in here to test multiple gradients</div>
  </ViewTab>
</template>

<script>
import ViewTab from "@/views/ViewTab";
export default {
  name: "Test",
  components: {ViewTab},
  data() {
    return {
      isClicked: false,
    }
  }
}
</script>

<style scoped>

.test_div {
  transition: all 0.75s ease;
  background: linear-gradient(to bottom, transparent 50%, blue 50%) bottom;
  background-size: 100% 200%;
}

.with_background {
  background-position: top;
}

.without_background {
  background-position: bottom;
}

.topbar {
  height: 150px;
  background:

    /* the markers*/
      linear-gradient(yellow 0 0) 25% /2px 100%,
      linear-gradient(yellow 0 0) 50% /2px 100%,
      linear-gradient(yellow 0 0) 75% /2px 100%,
        /* the needed background*/
      linear-gradient(-63deg, rgba(28,25,84,1) 50%,transparent 0) calc(50% - 100px) 0/200px 100%,
      linear-gradient(rgba(28,25,84,1),rgba(28,25,84,1)) right/50% 100%,
      linear-gradient(to bottom, red, blue);
  background-repeat:no-repeat;
}

</style>