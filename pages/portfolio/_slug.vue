<template>
  <div class="container">portfolio inner</div>
</template>

<script>
export default {
  async asyncData({ $content, store }) {
    const portfolio = await $content("portfolio").fetch();
    const { items: clients } = await $content("clients").fetch();

    store.commit("setBlobColors", {});

    return { portfolio };
  },
};
</script>
