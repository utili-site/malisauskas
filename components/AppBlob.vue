<template>
  <div class="blob" />
</template>

<script>
import IconArrow from "@/components/icons/IconArrow";

export default {};
</script>

<style lang="scss">
.blob {
  width: 75vmax;
  height: 75vmax;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  // will-change: background-color;
  // transition: background-color 0.8s linear;
}
</style>
