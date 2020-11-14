<template>
  <div class="container"></div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const portfolio = await $content("portfolio").fetch();
    const { items: clients } = await $content("clients").fetch();
    console.log("slug", { portfolio });

    return { portfolio };
  },
};
</script>
