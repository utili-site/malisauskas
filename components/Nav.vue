<template>
  <nav class="nav">
    {{ email }}
  </nav>
</template>

<script>
export default {
  data() {
    return {
      nav: [],
      email: null,
      phone: null,
      talk: null,
    };
  },
  setup() {
    alert("setup");
  },
  async fetch() {
    // this.posts = await this.$http.$get("https://api.nuxtjs.dev/posts");
    const { nav, email, phone, talk } = await this.$content("ui", "header").fetch();
    this.nav = nav;
    this.email = email;
    this.talk = talk;
  },
};
</script>

<style>
.NuxtLogo {
  margin: auto;
}
</style>
