<template>
  <Component :is="type" :to="to" :href="href" :class="['btn', `btn--${modifier}`]">
    <span :class="['btn__text', `btn__text--${modifier}`]" v-text="label" />
    <IconArrow :class="['btn__icon', `btn__icon--${modifier}`]" />
  </Component>
</template>

<script>
import IconArrow from "@/components/icons/IconArrow";

export default {
  components: {
    IconArrow,
  },
  props: {
    type: {
      type: String,
      default: "NuxtLink",
    },
    action: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    modifier: {
      type: String,
      default: "black",
    },
  },
  computed: {
    to: ({ action, type }) => type === "NuxtLink" && action,
    href: ({ action, type }) => type === "a" && action,
  },
};
</script>

<style lang="scss">
.btn {
  background: #000;
  border: solid 2px #000;
  outline: none;
  color: #fff;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-weight: 700;
  font-size: 1.4rem;
  min-height: 4rem;
  padding: 0.1rem .4rem 0.4rem;
  transition: color 160ms var(--e), background-color 160ms var(--e), border-color 160ms var(--e);

  &__text {
    color: currentColor;
    transition: color 160ms var(--e);
    margin: 0 0.4rem;
  }

  &__icon {
    margin: 0 0.4rem;
    transition: color 160ms var(--e), transform 160ms var(--e);
  }

  &--white {
    background-color: #fff;
    border-color: #fff;
    color: #000;
  }
}
</style>
