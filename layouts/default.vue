<template>
  <div class="app">
    <div class="app__transitions transitions"></div>
    <AppHeader class="app__header" :header="header" />
    <Nuxt class="app__page" keep-alive />
    <AppFooter class="app__footer" :footer="footer" />
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
  }),
  async fetch() {
    // this.posts = await this.$http.$get("https://api.nuxtjs.dev/posts");
    this.header = await this.$content("ui", "header").fetch();
    this.footer = await this.$content("ui", "footer").fetch();
    // this.misc = await this.$content("ui", "misc").fetch();
  },
};
</script>

<style src="@/assets/scss/index.scss" lang="scss">
html {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
