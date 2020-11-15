<template>
  <div class="process">
    <div class="process__steps">
      <div class="process__step step" v-for="{ title, body } in steps" :key="title">
        <div class="process__top">
          <div class="process__title" v-text="title" />
          <div class="process__spreader">
            <IconArrow :class="`process__arrow process__arrow--${'active'}`" width="100%" />
          </div>
        </div>
        <div class="process__text" v-text="body" />
      </div>
    </div>
  </div>
</template>

<script>
import IconArrow from "@/components/icons/IconArrow";

export default {
  components: {
    IconArrow,
  },
  props: {
    steps: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.process {
  &__steps {
    display: grid;
    grid-gap: 3rem 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 5.2rem 0;
    margin-right: -3rem;
  }
  &__top {
    display: flex;
    align-items: center;
  }
  &__spreader {
    flex: 1 1 100%;
    position: relative;
    left: 1.1rem;
  }
  &__title {
    font-size: 2.4rem;
    font-weight: 700;
    white-space: pre;
  }
  &__text {
    line-height: 1.33;
    padding: 1.2rem 2.3rem 1.2rem 0;
  }
}
</style>
