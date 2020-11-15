<template>
  <div class="page page--services">
    <div class="page__container container">
      <PageIntro class="page__intro" :slug="slug" :title="title" :document="document" />
      <div class="page__services services">
        <div class="services__steps">
          <div class="services__step step" v-for="{ title, body } in steps" :key="title">
            <div class="step__top">
              <div class="step__title" v-text="title" />
              <IconArrow :class="['step__arrow', `step__arrow--${'active'}`]" />
            </div>
            <div class="step__text" v-text="body" />
          </div>
        </div>
        <div class="services__extrudes">
          <div class="services__extrude extrude" v-for="{ title, body, background } in blocks" :key="title">
            <div class="extrude__wrapper">
              <div class="extrude__cropper">
                <div class="extrude__content">
                  {{ title }}
                  <div class="extrude__title" v-text="title" />
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageIntro from "@/components/PageIntro";
import IconArrow from "@/components/icons/IconArrow";

export default {
  components: {
    PageIntro,
    IconArrow,
  },
  async asyncData({ $content, store }) {
    const document = await $content("services").fetch();
    const { cta, years, experience, steps, blocks, slug, title } = document;

    store.commit("setBlobColors", {
      leftBlobColor: document.leftBlobColor,
      rightBlobColor: document.rightBlobColor,
    });

    return { cta, years, experience, steps, blocks, slug, title, document };
  },
};
</script>
