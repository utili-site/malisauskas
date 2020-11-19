<template>
  <div class="clients">
    <div class="clients__grid">
      <div class="clients__block" v-for="{ logo, body } in clients" :key="body">
        <img :src="logo" :alt="body" class="clients__logo" />
        <div class="clients__text" v-if="body">{{ body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import PageIntro from "@/components/PageIntro";

export default {
  props: {
    clients: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.clients {
  &__grid {
    display: grid;
    grid-gap: 0 3rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    padding: 8.1rem 0;
  }
  &__block {
    padding: 2.5rem 0;
  }
  &__logo {
    position: relative;
    display: inline-block;
    width: 19rem;
    height: 3rem;
    object-fit: contain;
    object-position: 0 50%;
  }
  &__link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &__text {
    padding: 1.5rem 0;
    min-height: 10.4rem;
    max-width: 30.4rem;
    line-height: 1.33;
  }
}
</style>
