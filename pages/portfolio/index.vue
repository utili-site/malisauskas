<template>
  <div class="page page--portfolio">
    <div class="page__container container">
      <PageIntro class="page__intro" :document="document" />
      <PagePortfolio class="page__portfolio" :blocks="blocks" :slug="slug" />
    </div>
  </div>
</template>

<script>
import PageIntro from "@/components/PageIntro";
import PagePortfolio from "@/components/PagePortfolio";

export default {
  components: {
    PageIntro,
    PagePortfolio,
  },
  async asyncData({ $content, store }) {
    const document = await $content("portfolio").fetch();
    const { slug, title, blocks } = document;

    store.dispatch("updateBlobColorsHex", {
      leftBlobColorHex: document.leftBlobColor,
      rightBlobColorHex: document.rightBlobColor,
    });

    return { slug, title, blocks, document };
  },
};
</script>
