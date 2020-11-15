<template>
  <div class="page page--services">
    <div class="page__container container">
      <PageIntro class="page__intro" :document="document" />
      <div class="page__process process">
        <div class="process__steps">
          <div class="process__step step" v-for="{ title, body } in steps" :key="title">
            <div class="process__top">
              <div class="process__title" v-text="title" />
              <div class="process__spreader">
                <IconArrow :class="['process__arrow', `process__arrow--${'active'}`]" width="100%" />
              </div>
            </div>
            <div class="process__text" v-text="body" />
          </div>
        </div>
      </div>
      <div class="page__services services">
        <div class="services__grid">
          <div class="services__block extrude" v-for="{ title, body, background } in blocks" :key="title">
            <div class="extrude__wrapper">
              <div class="extrude__cropper">
                <div class="extrude__content">
                  <h2 class="extrude__title" v-text="title" />
                  <div class="extrude__text" v-text="body" />
                  <img :src="background" :alt="title" class="extrude__image" />
                </div>
                <div class="extrude__base">
                  <i class="extrude__line extrude__line--left"></i>
                  <i class="extrude__line extrude__line--top"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="services__block">
            <div class="services__info">
              <h2 v-text="subtitle" />
              <AppBtn class="services__btn" type="button" :label="cta" :style="{ color: servicesBlobColor }" />
            </div>
          </div>
        </div>
        <AppBlob class="services__blob" :style="{ backgroundColor: servicesBlobColor }" />
      </div>
    </div>
  </div>
</template>

<script>
import AppBlob from "@/components/AppBlob";
import AppBtn from "@/components/AppBtn";
import PageIntro from "@/components/PageIntro";
import IconArrow from "@/components/icons/IconArrow";

export default {
  components: {
    AppBlob,
    AppBtn,
    PageIntro,
    IconArrow,
  },
  async asyncData({ $content, store }) {
    const document = await $content("services").fetch();
    const { cta, years, experience, steps, blocks, slug, title, servicesBlobColor, subtitle } = document;

    store.commit("setBlobColors", {
      leftBlobColor: document.leftBlobColor,
      rightBlobColor: document.rightBlobColor,
    });

    return { cta, years, experience, steps, blocks, slug, title, servicesBlobColor, subtitle, document };
  },
};
</script>

<style lang="scss">
$depth: 4.6rem;
$border: 0.3rem;

.services {
  position: relative;
  &__grid {
    display: grid;
    grid-gap: 2.6rem;
    grid-template-columns: 1fr 1fr;
    padding: 15.7rem 0 5rem;
    position: relative;
    z-index: 2;
  }
  &__blob {
    position: absolute;
    right: 10%;
    bottom: 10%;
    z-index: 1;
    width: 50vmax;
    height: 50vmax;
  }
  &__info {
		padding: 1.6rem 1rem 1rem 5.1rem;
  }
  &__btn {
    margin: 2.8rem 0;
  }
}

.process {
  &__steps {
    display: grid;
    grid-gap: 3rem 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 5.2rem 0;
    margin-right: -3rem;
  }
  &__top {
    display: flex;
    align-items: center;
  }
  &__spreader {
    flex: 1 1 100%;
    position: relative;
    left: 1.1rem;
  }
  &__title {
    font-size: 2.4rem;
    font-weight: 700;
    white-space: pre;
  }
  &__text {
    line-height: 1.33;
    padding: 1.2rem 2.3rem 1.2rem 0;
  }
}

.extrude {
  margin-right: (-$depth);
  margin-top: (-$depth);
  &__wrapper {
    padding: $depth 0 0 $depth;
    // margin: (-$depth) 0 0 (-$depth);
    position: relative;
  }
  &__cropper {
    overflow: hidden;
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
  &__base {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: calc(100% - #{$depth});
    background: #b29d83;
    z-index: 1;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 4;
      border-right: solid $border #000;
      border-bottom: solid $border #000;
    }
    &:after {
      content: "";
      position: absolute;
      right: $border / 2;
      bottom: 0;
      width: 100%;
      height: $border;
      background-color: #000;
      z-index: 2;
      transform-origin: 100% 100%;
      transform: rotate(45deg);
    }
  }
  &__content {
    border: solid $border #000;
    position: relative;
    z-index: 4;
    background-color: #fff;
    padding: 5.9rem 44% 1rem 4.7rem;
    min-height: 44.6rem;
  }
  &__image {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 55.5%;
    height: 85.6%;
    object-position: 100% 100%;
    object-fit: contain;
    z-index: -1;
    pointer-events: none;
  }
  &__line {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #b29d83;

    &--left {
      border-bottom: $border solid #000;
      transform-origin: 100% 100%;
      transform: rotate(45deg);
      right: 100%;
      top: 0;
      z-index: 3;
    }
    &--top {
      border-top: $border solid #000;
      transform-origin: 100% 0;
      transform: rotate(45deg);
      right: 0;
      top: 0;
      z-index: 3;
    }
  }
  &__text {
    padding: 2.8rem 0;
    max-width: 25rem;
  }
  &:hover {
    .extrude {
      &__wrapper {
        padding: 0;
      }
      &__cropper {
        padding: 0 $depth $depth 0;
      }
      &__base {
        width: calc(100% - #{$depth});
      }
    }
  }
}
</style>
