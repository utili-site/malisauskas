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
};
</script>

<style lang="scss">
.portfolio {
  &__container {
    max-width: 108.8rem;
    margin: 0rem auto;
  }
  &__grid {
    padding: 4.9rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__block {
    width: calc(50% - 1.5rem);
    position: relative;
    &:nth-child(even) {
      top: 10rem;
    }
    &--hire {
    }
  }
  &__work {
  }
  &__media {
    position: relative;
    padding-top: 75%;
    width: 100%;
    display: block;
    &--hire {
      // Style for "Rectangle"
    }
  }
  &__thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__tags {
    color: #555555;
    font-size: 1.3rem;
    font-weight: 400;
    text-transform: uppercase;
    padding: 2.1rem 0 1rem;
  }
  &__tag {
    display: inline-block;
    &:not(:last-child):after {
      content: "•";
      margin: 0 0.6rem;
      display: inline-block;
    }
  }
  &__excerpt {
    padding: 1.4rem 0;
    min-height: 16rem;
    p {
      margin: 0;
    }
  }
  &__hire {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 10%;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 0.3rem dashed #000000;
  }
  &__btn {
    margin: 1.2rem 0;
  }
  &__blob {
    display: none;
  }
}
</style>
