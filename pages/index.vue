<template>
  <div class="container">
    {{ hero_prefix }}
    {{ hero_variants }}
    {{ hero_suffix }}
    {{ clients }}
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const { hero_prefix, hero_variants, hero_suffix } = await $content(
      "home"
    ).fetch();
    const { items: clients } = await $content("clients").fetch();
    console.log({ clients });

    return { hero_prefix, hero_variants, hero_suffix, clients };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
