<template>
  <div class="intro">
    <div class="intro__slug" v-if="slug" v-text="slug" />
    <h1 v-if="title" v-text="title" />
    <nuxt-content class="intro__text" v-if="document" :document="document" />
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
    color: #555;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.7rem;
    text-transform: uppercase;
    padding: 1.8rem;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			top: 2.2rem;
			left: 0;
			width: .7rem;
			height: .7rem;
			border-bottom: .2rem solid currentColor;
			border-left: .2rem solid currentColor;
		}
  }
}
</style>
