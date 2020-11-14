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
  async asyncData({ $content, store }) {
    const document = await $content("home").fetch();
    const { hero_prefix, hero_variants, hero_suffix } = document;

    const { items: clients } = await $content("clients").fetch();

    store.commit("setBlobColors", {
      leftBlobColor: document.leftBlobColor,
      rightBlobColor: document.rightBlobColor,
    });

    return { hero_prefix, hero_variants, hero_suffix, clients };
  },
};
</script>
