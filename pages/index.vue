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

    return { hero_prefix, hero_variants, hero_suffix, clients };
  },
};
</script>
