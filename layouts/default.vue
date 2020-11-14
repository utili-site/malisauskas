<template>
  <div class="app" :style="pageStyle">
    <div class="app__view">
      <AppHeader class="app__header" :header="header" some="prop" />
      <div class="app__blob app__blob--left" :style="leftBlobStyle" />
      <div class="app__blob app__blob--right" :style="rightBlobStyle" />
      <!-- <Nuxt @set-blobs-colors="handleBlobColors" class="app__page" keep-alive /> -->
      <Nuxt class="app__page" />
    </div>
    <AppFooter class="app__footer" ref="footer" :footer="footer" />
    <aside class="app__sidebar sidebar"></aside>
    <div class="app__portal portal"></div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import Vue from "vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data: () => ({
    header: {},
    footer: {},
    misc: {},
    footerHeight: 0,
    leftBlobColor: null,
    rightBlobColor: null,
  }),
  computed: {
    pageStyle: ({ footerHeight }) => ({ paddingBottom: `${footerHeight}px` }),
    rightBlobStyle: ({ $router }) => ({ backgroundColor: $router.app.leftBlobColor }),
    rightBlobStyle: ({ $router }) => ({ backgroundColor: $router.app.rightBlobColor }),
  },
  mounted() {
    this.footerHeight = this.$refs.footer.$el.clientHeight;
  },
  async fetch() {
    this.header = await this.$content("ui", "header").fetch();
    this.footer = await this.$content("ui", "footer").fetch();
  },
};
</script>

<style src="@/assets/scss/index.scss" lang="scss" />

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
    z-index: 1;
    width: 75vw;
    height: 75vw;
    border-radius: 50%;
    background-color: red;
    opacity: 0.2;
    filter: blur(150px);
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
