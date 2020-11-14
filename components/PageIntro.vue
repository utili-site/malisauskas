<template>
  <div class="intro">
    <div class="intro__container container">
      <div class="intro__slug" v-if="slug" v-text="document.slug" />
      <h1 class="intro__slug" v-if="title" v-text="title" />
      <nuxt-content class="intro__text" v-if="document" :document="document" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    document: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
}
</style>
