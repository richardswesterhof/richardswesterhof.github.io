<!-- Created by Richard on 12/04/2021-->

<template>
  <ViewTab title="This page is used for testing new things">
    <h4>It is not meant to be in production</h4>

    <font-awesome-icon :icon="['fas', 'circle']" class="gradient-icon"/>

    <i class="material-icons gradient-icon">cloud</i>

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

.gradient-icon:before,
.gradient-icon,
.gradient-icon:after {
  background: linear-gradient(to top, red, blue);
  -webkit-background-clip: text;
  color: transparent;
  display: initial; /* reset Font Awesome's display:inline-block */
}

.test_div {
  transition: all 0.75s ease;
  /*background: linear-gradient(to bottom, transparent 50%, blue 50%) bottom;*/
  /*background: !*linear-gradient(rgba(250,25,84,1),rgba(28,25,84,1)) right/50% 100%,*!*/
  background: linear-gradient(to top, red, blue) bottom;
    /*linear-gradient(to bottom, transparent, transparent) calc(top - 50%)/100% 50%;*/
  /*background-size: 100% 200%;*/
  background-repeat: no-repeat;
}

.with_background {
  background-size: 100% 100%;
}

.without_background {
  background-size: 100% 0;
}

.topbar {
  height: 150px;
  background:
        /* the needed background*/
      linear-gradient(-63deg, rgba(28,25,84,1) 50%,transparent 50%) calc(50% - 100px) 10px/200px 100%,
      /*linear-gradient(rgba(28,250,84,1),rgba(208,20,84,1)) left/50% 100%,*/
      linear-gradient(to bottom, red, blue) top/100% 50%;
  background-repeat:no-repeat;
  background-size: 100% 100%
}

</style>