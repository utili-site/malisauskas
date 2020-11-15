<template>
  <div class="page page--portfolio">
    <div class="page__container container">
      <PageIntro class="page__intro" :document="document" />
      <PagePortfolio class="page__portfolio" :portfolio="portfolio" :slug="slug" />
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

    store.commit("setBlobColors", {
      leftBlobColor: document.leftBlobColor,
      rightBlobColor: document.rightBlobColor,
    });

    const works = await $content("works").fetch();
    const portfolio = blocks.map((block) => works.find(({ title }) => title === block));

    return { slug, title, portfolio, document };
  },
};
</script>
