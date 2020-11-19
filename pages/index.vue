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
          <div class="hero__marquee">
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
          <div class="flow__slug slug" v-text="services.slug" />
          <h2 class="flow__title" v-text="home.flow_title" />
          <div class="flow__intro" v-text="home.flow_intro" />
        </div>
        <PageProcess class="flow__process" :steps="services.steps" />
        <AppBtn type="NuxtLink" modifier="white" :action="services.slug" :label="home.flow_cta" />
      </div>
    </section>
    <section class="page__showcase showcase" v-if="home.showcase_blocks">
      <div class="showcase__container container">
        <div class="showcase__top">
          <div class="showcase__slug slug" v-text="portfolio.slug" />
          <h2 class="showcase__title" v-text="home.showcase_title" />
          <div class="showcase__intro" v-text="home.showcase_intro" />
        </div>
        <PagePortfolio class="showcase__portfolio" :blocks="home.showcase_blocks" :slug="portfolio.slug" />
      </div>
      <NuxtLink :to="portfolio.slug" class="showcase__marquee">
        <span class="showcase__see">
          <span class="showcase__more" v-for="(text, index) in 20" :key="index" v-text="home.showcase_all" />
        </span>
      </NuxtLink>
    </section>
    <section class="page__feedback feedback">
      <div class="feedback__container container">
        <swiper class="feedback__swiper" ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="feedback__slide" v-for="{ text, name, position } in home.feedback" :key="text">
            <div class="feedback__quote" v-text="text"></div>
            <div class="feedback__meta">
              <span class="feedback__name" v-text="name" />
              <template v-if="position">
                <span class="feedback__dot" v-text="'  •  '" />
                <span class="feedback__position" v-text="position" />
              </template>
            </div>
          </swiper-slide>
        </swiper>
        <div class="feedback__pagination swiper-pagination" slot="pagination" />
      </div>
      <div class="feedback__nav feedback__nav--prev swiper-button-prev" slot="button-prev" />
      <div class="feedback__nav feedback__nav--next swiper-button-next" slot="button-next" />
    </section>
  </main>
</template>

<script>
import PageIntro from "@/components/PageIntro";
import PageProcess from "@/components/PageProcess";
import PagePortfolio from "@/components/PagePortfolio";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";

import "swiper/css/swiper.css";

export default {
  components: {
    PageIntro,
    PageProcess,
    PagePortfolio,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        autoplay: false,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          renderProgressbar: function (progressbarFillClass) {
            return '<span class="' + progressbarFillClass + '"></span>';
          },
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
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
  &--home {
  }
  &__hero {
  }
  &__hero {
    height: 100vh;
    position: relative;
  }
  &__flow {
    color: #fff;
    background-color: #000;
    padding: 12.1rem 0 14.9rem;
  }
  &__showcase {
    padding: 12.2rem 0 1.7rem;
  }
  &__feedback {
  }
}
.hero {
  &__container {
    height: 100%;
    flex-wrap: wrap;
    display: flex;
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
    display: block;
    padding: 2.3rem 0rem;
  }
  &__label {
    padding: 1.6rem 1.5rem;
  }
  &__marquee {
  }
  &__clients {
    white-space: nowrap;
    flex-wrap: wrap;
  }
  &__client {
    vertical-align: middle;
    padding: 1.5rem 8.1rem 1.5rem 1.5rem;
    width: auto;
    display: inline-block;
  }
  &__logo {
  }
}
.container {
}
.flow {
  &__container {
  }
  &__top {
    padding: 1.2rem 0;
  }
  &__slug {
    margin-bottom: 0.6rem;
  }
  &__title {
    max-width: 57rem;
    line-height: 1.39;
  }
  &__intro {
    padding: 1rem 0 2.6rem;
  }
  &__process {
    padding: 1.5rem 0;
  }
}
.showcase {
  &__top {
    padding: 1.2rem 0;
  }
  &__slug {
    margin-bottom: 0.6rem;
  }
  &__title {
    font-size: 12rem;
    line-height: 1.17;
  }
  &__intro {
    padding: 2.1rem 0 1.6rem;
    max-width: 83rem;
  }
  &__container {
  }
  &__portfolio {
  }
  &__marquee {
    display: block;
    margin: 7.6rem 0;
  }
  &__see {
    display: block;
    white-space: nowrap;
    flex-wrap: wrap;
  }
  &__more {
    vertical-align: middle;
    padding: 2.4rem;
    display: inline-block;
    color: #6b79c3;
    font-family: "Formula Condensed";
    font-size: 7.2rem;
    font-weight: 700;
    line-height: 1.39;
    text-align: center;
  }
}
.feedback {
  &__container {
  }
  &__swiper {
  }
  &__swiper-wrapper {
  }
  &__slide {
  }
  &__quote {
  }
  &__meta {
  }
  &__name {
  }
  &__dot {
  }
  &__position {
  }
}
</style>
