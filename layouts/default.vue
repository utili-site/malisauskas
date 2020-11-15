<template>
  <div class="app" :style="pageStyle">
    <div class="app__view">
      <AppHeader class="app__header" :header="header" />
      <AppBlob class="app__blob app__blob--left" :style="$store.getters.leftBlobStyle" />
      <AppBlob class="app__blob app__blob--right" :style="$store.getters.rightBlobStyle" />
      <Nuxt class="app__page" keep-alive />
    </div>
    <AppFooter class="app__footer" ref="footer" :footer="footer" />
    <aside class="app__sidebar sidebar"></aside>
    <div class="app__portal portal"></div>
  </div>
</template>

<script>
import AppBlob from "@/components/AppBlob";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import Vue from "vue";

export default {
  components: {
    AppBlob,
    AppHeader,
    AppFooter,
  },
  computed: {
    pageStyle: ({ footerHeight }) => ({ paddingBottom: `${footerHeight}px` }),
    leftBlobStyle: ({ $store }) => $store.getters.leftBlobStyle,
    rightBlobStyle: ({ footerHeight }) => $store.getters.rightBlobStyle,
  },
  data: () => ({
    header: {},
    footer: {},
    misc: {},
    footerHeight: 0,
  }),
  mounted() {
    this.footerHeight = this.$refs.footer.$el.clientHeight;
  },
  async fetch() {
    this.header = await this.$content("ui", "header").fetch();
    this.footer = await this.$content("ui", "footer").fetch();
  },
};
</script>

<style src="@/assets/scss/index.scss" lang="scss"></style>

<style lang="scss">
.app {
  position: relative;
  &__header {
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  &__view {
    background-color: #fff;
    position: relative;
    z-index: 2;
    overflow: hidden;
  }
  &__page {
    position: relative;
    z-index: 2;
  }
  &__footer {
    z-index: 1;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &__blob {
    position: absolute;
    // position: fixed;
    z-index: 1;
    &--left {
      top: -50vmax;
      left: -20vmax;
    }
    &--right {
      top: -25vmax;
      right: -15vmax;
    }
  }
}
</style>
