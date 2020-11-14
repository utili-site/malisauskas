<template>
  <div class="page page--portfolio">
    <div class="page__container container">
      <PageIntro class="page__intro" :slug="slug" :title="title" :document="document" />
      <div class="page__portfolio portfolio">
        <div class="portfolio__grid">
          <div class="portfolio__block" v-for="({ thumbnail, title, ...work }, index) in portfolio" :key="work.slug">
            <div class="portfolio__work">
              <!-- <nuxt-picture class="portfolio__thumbnail" sizes="300 (webp),300:600 (jpeg),600:900" :src="thumbnail" /> -->
              <img class="portfolio__thumbnail" :src="thumbnail" />
              <NuxtLink class="portfolio__link" :to="`${slug}/${work.slug}`" v-text="title" />
              <!-- <NuxtLink class="portfolio__link" :to="work.slug" v-text="title" /> -->
              {{ (work, index) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageIntro from "@/components/PageIntro";

export default {
  components: {
    PageIntro,
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
