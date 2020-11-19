<template>
  <div class="portfolio">
    <div class="portfolio__container">
      <div class="portfolio__grid">
        <template v-for="({ ...work }, index) in items">
          <div class="portfolio__block" :key="work.slug">
            <div class="portfolio__work">
              <NuxtLink class="portfolio__media" :to="`${slug}/${work.slug}`">
                <img class="portfolio__thumbnail" :src="work.thumbnail" />
              </NuxtLink>
              <div class="portfolio__tags">
                <div class="portfolio__tag" v-for="(tag, index) in work.tags" :key="index">{{ tag }}</div>
              </div>
              <h3 v-text="work.title" />
              <NuxtContent class="portfolio__excerpt" :document="work" />
            </div>
          </div>
          <div class="portfolio__block portfolio__block--hire" :key="`hire-${index}`" v-if="index === 4">
            <div class="portfolio__work">
              <div class="portfolio__media portfolio__media--hire">
                <div class="portfolio__hire">
                  <h2 v-text="'Sweet spot saved for your project.'" />
                </div>
              </div>
              <div class="portfolio__tags">
                <div class="portfolio__tag" v-for="(tag, index) in work.tags" :key="index">{{ tag }}</div>
              </div>
              <h3 v-text="'Feel you could use some help from us?'" />
              <AppBtn class="portfolio__btn" type="button" :label="'Lets talk'" />
              <AppBlob class="portfolio__blob" :style="{ backgroundColor: 'red' }" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import AppBlob from "@/components/AppBlob";
import AppBtn from "@/components/AppBtn";
import PageIntro from "@/components/PageIntro";

export default {
  props: {
    blocks: {
      type: Array,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  components: {
    AppBlob,
    AppBtn,
  },
  data() {
    return {
      items: [],
    };
  },
  async fetch() {
    const works = await this.$content("works").fetch();
    this.items = this.blocks.map((block) => works.find(({ title }) => title === block));
  },
  computed: {
    // items: ({ blocks }) => blocks.map((block) => works.find(({ title }) => title === block)),
  },
};
</script>
