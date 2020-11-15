<template>
  <div class="services">
    <div class="services__grid">
      <ServicesExtrude
        class="services__block"
        v-for="{ title, body, background } in blocks"
        :key="title"
        :title="title"
        :body="body"
        :background="background"
      />
      <div class="services__block">
        <div class="services__info">
          <h2 v-text="subtitle" />
          <AppBtn class="services__btn" type="button" :label="cta" :style="{ color: servicesBlobColor }" />
        </div>
      </div>
    </div>
    <AppBlob class="services__blob" :style="{ backgroundColor: servicesBlobColor }" />
  </div>
</template>

<script>
import AppBlob from "@/components/AppBlob";
import AppBtn from "@/components/AppBtn";
import PageIntro from "@/components/PageIntro";
import PageProcess from "@/components/PageProcess";
import ServicesExtrude from "@/components/ServicesExtrude";

export default {
  props: {
    blocks: {
      type: Array,
      required: true,
    },
    cta: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    servicesBlobColor: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
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
</style>
