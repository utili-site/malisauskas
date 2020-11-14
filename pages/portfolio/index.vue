<template>
  <div class="page page--portfolio">
    <div class="page__container container">
      <Intro class="page__intro" :slug="slug" :title="title" :document="document" />
      <div class="page__portfolio portfolio">
        <div class="portfolio__grid">
          <div class="portfolio__block" v-for="({ slug, thumbnail, ...work }, index) in portfolio" :key="slug">
            <div class="portfolio__work">
              <!-- <nuxt-picture class="portfolio__thumbnail" sizes="300 (webp),300:600 (jpeg),600:900" :src="thumbnail" /> -->
              <img class="portfolio__thumbnail" :src="thumbnail" />
              {{ (work, index) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Intro from "@/components/Intro";

export default {
  components: {
    Intro,
  },
  async asyncData({ $content }) {
    const document = await $content("portfolio").fetch();
    const { slug, title, blocks } = document;

    const works = await $content("works").fetch();
    const portfolio = blocks.map((block) => works.find(({ title }) => title === block));

    return { slug, title, portfolio, document };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
}
</style>
