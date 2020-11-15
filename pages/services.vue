<template>
  <div class="page page--services">
    <PageIntro class="page__intro" :slug="slug" :title="title" :document="document" />
    <div class="page__services services">
      <div class="page__container container">
        <div class="block">
          <div class="block__wrapper">
            <div class="block__base">
              <div class="block__media">
                <img src="/images/uploads/passport-thumb.png" alt="" class="block__image" />
              </div>
              <div class="block__rect">
                <i class="block__line block__line--left"></i>
                <i class="block__line block__line--top"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  async asyncData({ $content, store }) {
    const document = await $content("services").fetch();
    const { slug, title, blocks } = document;

    store.commit("setBlobColors", {
      leftBlobColor: document.leftBlobColor,
      rightBlobColor: document.rightBlobColor,
    });

    return { slug, title, document, services: document.items };
  },
};
</script>
