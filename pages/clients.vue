<template>
  <div class="page page--clients">
    <div class="page__container container">
      <PageIntro class="page__intro" :document="document" />
      <PageClients class="page__clients" :clients="clients" />
    </div>
  </div>
</template>

<script>
import PageIntro from "@/components/PageIntro";
import PageClients from "@/components/PageClients";

export default {
  components: {
    PageClients,
  },
  async asyncData({ $content, store }) {
    const document = await $content("clients").fetch();
    const { blocks } = document;

    store.dispatch("updateBlobColorsHex", {
      leftBlobColorHex: document.leftBlobColor,
      rightBlobColorHex: document.rightBlobColor,
    });

    return { document, clients: document.items };
  },
};
</script>

