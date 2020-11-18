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
          <div class="hero__label" v-text="'missing translation'" />
          <div class="hero__clients">
            <div class="hero__client" v-for="{ logo, title, url } in clients.items" :key="title">
              <a :href="url" class="hero__client-link" target="_blank">
                <img :src="logo" class="hero__client-logo" :alt="title" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="page__flow flow" v-if="services.steps">
      <div class="flow__container container">
        <PageProcess class="flow__process" :steps="services.steps" />
      </div>
    </section>
    <section class="page__showcase page__showcase" v-if="portfolio">
      <div class="page__showcase__container container">
        <PagePortfolio class="flow__process" :portfolio="portfolio.works" :slug="portfolio.slug" />
      </div>
    </section>
    <section class="page__feedback feedback">
      <div class="feedback__slider"></div>
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
    const works = await $content("works").fetch();
    const portfolio = await $content("portfolio").fetch();
    const clients = await $content("clients").fetch();

    portfolio.works = portfolio.blocks.map((block) => works.find(({ title }) => title === block));

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
