<template>
  <div class="page page--services">
    <div class="page__container container">
      <PageIntro class="page__intro" :document="document" />
      <PageProcess class="page__process" :steps="steps" />
      <PageServices
        class="page__services"
        :blocks="blocks"
        :cta="cta"
        :subtitle="subtitle"
        :servicesBlobColor="servicesBlobColor"
      />
    </div>
  </div>
</template>

<script>
import AppBlob from "@/components/AppBlob";
import AppBtn from "@/components/AppBtn";
import PageIntro from "@/components/PageIntro";
import PageProcess from "@/components/PageProcess";
import ServicesExtrude from "@/components/ServicesExtrude";
import PageServices from "@/components/PageServices";

export default {
  components: {
    AppBlob,
    AppBtn,
    PageIntro,
    PageProcess,
    PageServices,
    ServicesExtrude,
  },
  async asyncData({ $content, store }) {
    const document = await $content("services").fetch();
    const { cta, years, experience, steps, blocks, slug, title, servicesBlobColor, subtitle } = document;

    store.dispatch("updateBlobColorsHex", {
      leftBlobColorHex: document.leftBlobColor,
      rightBlobColorHex: document.rightBlobColor,
    });

    return { cta, years, experience, steps, blocks, slug, title, servicesBlobColor, subtitle, document };
  },
};
</script>
