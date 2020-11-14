<template>
  <div class="app" :style="pageStyle">
    <div class="app__transitions transitions"></div>
    <AppHeader class="app__header" :header="header" />
    <Nuxt class="app__page" keep-alive />
    <AppFooter class="app__footer" ref="footer" :footer="footer" />
    <div class="app__sidebar sidebar"></div>
    <div class="app__portal portal"></div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data: () => ({
    header: null,
    footer: null,
    misc: null,
    footerHeight: 0,
  }),
  computed: {
    // pageStyle: (footerHeight) => ({ paddingBottom: `${footerHeight}px` }),
    pageStyle: ({ footerHeight }) => {
      console.log(footerHeight);
      return { paddingBottom: `${footerHeight}px` };
    },
  },
  mounted() {
    this.footerHeight = this.$refs.footer.$el.clientHeight;
    console.log(this.footerHeight);
  },
  async fetch() {
    // this.posts = await this.$http.$get("https://api.nuxtjs.dev/posts");
    this.header = await this.$content("ui", "header").fetch();
    this.footer = await this.$content("ui", "footer").fetch();
    // this.misc = await this.$content("ui", "misc").fetch();
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
  &__page {
    position: relative;
    z-index: 2;
    background-color: #fff;
  }
  &__footer {
    z-index: 1;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
