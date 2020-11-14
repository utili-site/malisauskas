<template>
  <div class="page page--clients">
    <div class="page__container container">
      <PageIntro class="page__intro" :slug="slug" :title="title" :document="document" />
      <div class="page__clients clients">
        <div class="clients__grid">
          <div class="clients__block" v-for="{ logo, title, body, url } in clients" :key="title">
            <div class="clients__logo" v-if="logo">
              <img :src="logo" :alt="title" class="clients__image" />
              <a :href="url" class="clients__link"></a>
            </div>
            <div class="clients__text" v-if="body">{{ body }}</div>
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
    const document = await $content("clients").fetch();
    const { slug, title, blocks } = document;

    store.commit("setBlobColors", {
      leftBlobColor: document.leftBlobColor,
      rightBlobColor: document.rightBlobColor,
    });

    return { slug, title, document, clients: document.items };
  },
};
</script>
<style lang="scss">
.clients {
  &__grid {
    display: grid;
    grid-gap: 0 3rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    padding: 8.1rem 0;
  }
  &__block {
    padding: 2.5rem 0;
  }
  &__logo {
    position: relative;
    display: inline-block;
  }
  &__image {
    width: 19rem;
    height: 3rem;
    object-fit: contain;
    object-position: 0 50%;
  }
  &__link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &__text {
    padding: 1.5rem 0;
    min-height: 10.4rem;
    max-width: 30.4rem;
    line-height: 1.33;
  }
}
</style>
