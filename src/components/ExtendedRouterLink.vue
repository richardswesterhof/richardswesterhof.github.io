<!-- Created by Richard on 13/04/2021-->
<!-- Eh not really, this is taken from the Vue Router documentation: https://next.router.vuejs.org/guide/advanced/extending-router-link.html -->

<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="to" target="_blank">
    <slot />
  </a>
  <router-link
      v-else
      v-bind="$props"
      custom
      v-slot="{ isActive, href, navigate }"
  >
    <a
        v-bind="$attrs"
        :href="href"
        @click="navigate"
        :class="isActive ? activeClass : inactiveClass"
    >
      <slot />
    </a>
  </router-link>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'ExtendedRouterLink',

  props: {
    // add all of the default router-link props
    ...RouterLink.props,
    // add new prop inactive-class
    inactiveClass: String,
  },

  computed: {
    isExternalLink() {
      return typeof this.to === 'string' && this.to.startsWith('http')
    },
  },
}
</script>