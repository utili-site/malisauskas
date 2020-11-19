<template>
  <div class="intro">
    <div class="intro__slug slug" v-if="slug" v-text="slug" />
    <h1 v-if="title" v-text="title" />
    <NuxtContent class="intro__text" v-if="document" :document="document" />
  </div>
</template>

<script>
export default {
  props: {
    document: {
      type: Object,
      default: null,
    },
  },
  computed: {
    slug: ({ document }) => document.slug,
    title: ({ document }) => document.title,
  },
};
</script>

<style lang="scss">
.intro {
  padding: 15.5rem 0 2.6rem;
  &__slug {
  }
  &__text {
    width: 65%;
  }
}
</style>
