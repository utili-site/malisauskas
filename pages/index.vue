<template>
  <div class="page page--home">
    {{ hero_prefix }}
    {{ hero_variants }}
    {{ hero_suffix }}
    {{ clients }}
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const { hero_prefix, hero_variants, hero_suffix } = await $content("home").fetch();
    const { items: clients } = await $content("clients").fetch();
    console.log({ clients });

    return { hero_prefix, hero_variants, hero_suffix, clients };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
}
</style>
