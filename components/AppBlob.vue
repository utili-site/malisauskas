<template>
  <div :class="`blob blob--${type}`" />
</template>

<script>
import IconArrow from "@/components/icons/IconArrow";

export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.blob {
  width: 75vmax;
  height: 75vmax;
  border-radius: 50%;
  filter: blur(150px);
  pointer-events: none;
  will-change: background-color;
  transition: background-color 0.8s linear;
  &--left {
    top: -50vmax;
    left: -20vmax;
  }
  &--right {
    top: -25vmax;
    right: -15vmax;
  }
  &__blob {
    position: absolute;
    // position: fixed;
    z-index: 1;
    width: 75vw;
    height: 75vw;
    border-radius: 50%;
    filter: blur(150px);
    pointer-events: none;
    will-change: background-color;
    transition: background-color 0.8s linear;
    &--left {
      top: -50vw;
      left: -20vw;
    }
    &--right {
      top: -25vw;
      right: -15vw;
    }
  }
}
</style>
