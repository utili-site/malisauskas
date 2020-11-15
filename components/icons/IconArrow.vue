<template>
  <div class="arrow" :style="{ width: width }" />
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '18px',
    },
  },
};
</script>
<style lang="scss">
.arrow {
    position: relative;
    height: 1rem;
    &:before {
        content: '';
        position: absolute;
        left: 0;
        right: .1rem;
        position: absolute;
        background-color: currentColor;
        top: .4rem;
        height: .2rem;
    }
    &:after {
        content: '';
        position: absolute;
        width: .7rem;
        height: .7rem;
        transform-origin: 100% 100%;
        border-right: solid .2rem currentColor;
        border-bottom: solid .2rem currentColor;
        transform: rotate(-45deg);
        top: -.2rem;
        right: 0;
    }
}
</style>