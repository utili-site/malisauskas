<template>
  <main class="page page--home">
    <section class="page__hero hero">
      <div class="hero__container container">
        <h1 class="hero__text">
          <span class="hero__prefix" v-text="home.hero_prefix" />
          <span class="hero__variant" v-text="home.hero_variants[0]" />
          <br />
          <span class="hero__suffix" v-text="home.hero_suffix" />
        </h1>
        <div class="hero__bottom">
          <div class="hero__label" v-text="home.hero_clients_intro" />
          <div class="hero__scroller">
            <div class="hero__clients">
              <div class="hero__client" v-for="{ logo, body } in clients.items" :key="body">
                <img :src="logo" :alt="body" class="hero__logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="page__flow flow" v-if="services.steps">
      <div class="flow__container container">
        <div class="flow__top">
          <div class="flow__slogan" v-text="services.slug" />
          <h2 class="flow__title" v-text="home.flow_title" />
          <div class="flow__intro" v-text="home.flow_intro" />
        </div>
        <PageProcess class="flow__process" :steps="services.steps" />
        <AppBtn type="NuxtLink" modifier="white" :action="services.slug" :label="home.flow_cta" />
      </div>
    </section>
    <section class="page__showcase showcase" v-if="home.showcase_blocks">
      <div class="showcase__container container">
        <PagePortfolio class="showcase__portfolio" :blocks="home.showcase_blocks" :slug="portfolio.slug" />
      </div>
    </section>
    <section class="page__feedback feedback">
      <div class="feedback__container container">
        <div class="feedback__swiper">
          <div class="feedback__swiper-wrapper">
            <div class="feedback__slide" v-for="{ text, name, position } in home.feedback" :key="text">
              <div class="feedback__quote" v-text="text"></div>
              <div class="feedback__meta">
                <span class="feedback__name" v-text="name" />
                <template v-if="position">
                  <span class="feedback__dot" v-text="'  •  '" />
                  <span class="feedback__position" v-text="position" />
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import PageIntro from "@/components/PageIntro";
import PageProcess from "@/components/PageProcess";
import PagePortfolio from "@/components/PagePortfolio";

export default {
  components: {
    PageIntro,
    PageProcess,
    PagePortfolio,
  },
  async asyncData({ $content, store }) {
    const home = await $content("home").fetch();
    const services = await $content("services").fetch();
    const clients = await $content("clients").fetch();
    const portfolio = await $content("portfolio").fetch();

    store.dispatch("updateBlobColorsHex", {
      leftBlobColorHex: home.leftBlobColor,
      rightBlobColorHex: home.rightBlobColor,
    });

    return { home, clients, services, portfolio };
  },
};
</script>
<style lang="scss">
.page {
  &__hero {
    height: 100vh;
    position: relative;
  }
  &__flow {
    color: #fff;
    background-color: #000;
  }
}
.hero {
  &__container {
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 14rem 1.5rem;
  }
  &__text {
    width: 100%;
    margin: auto;
  }
  &__variant {
    display: inline-block;
  }
  &__bottom {
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &__clients {
    display: flex;
    align-content: center;
  }
}
</style>
