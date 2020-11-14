<template>
  <div class="page page--clients">
    <div class="page__container container">
      <Intro class="page__intro" :slug="slug" :title="title" :document="document" />
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
import Intro from "@/components/Intro";

export default {
  components: {
    Intro,
  },
  async asyncData({ $content }) {
    const document = await $content("clients").fetch();
    const { slug, title, blocks } = document;

    return { slug, title, document, clients: document.items };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
}
</style>
