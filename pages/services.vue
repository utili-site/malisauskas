<template>
  <div class="page page--services">
    <PageIntro class="page__intro" :slug="slug" :title="title" :document="document" />
    <div class="page__services services">
      <div class="services__grid">
        <div class="services__block" v-for="{ logo, title, body, url } in services" :key="title">
          <div class="services__logo" v-if="logo">
            <img :src="logo" :alt="title" class="services__image" />
            <a :href="url" class="services__link"></a>
          </div>
          <div class="services__text" v-if="body">{{ body }}</div>
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
  async asyncData({ $content }) {
    const document = await $content("services").fetch();
    const { slug, title, blocks } = document;

    return { slug, title, document, services: document.items };
  },
  mounted() {
    this.$emit("set-blobs-colors", {
      leftBlobColor: document.leftBlobColor,
      rightBlobColor: document.rightBlobColor,
    });
  },
};
</script>
