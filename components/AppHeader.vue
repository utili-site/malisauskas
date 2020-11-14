<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__actions">
        <AppLogo class="header__logo" />
        <nav class="header__nav" v-if="nav">
          <NuxtLink class="header__link" v-for="{ page, label } in nav" v-text="label" :to="`/${page}`" :key="page" />
        </nav>
      </div>
      <div class="header__info">
        <div class="header__contacts contacts">
          <a :href="`tel:${phone}`" class="contacts__link" v-if="phone">
            <IconPhone class="contacts__icon" />
            <span class="contacts__label" v-text="phone" />
          </a>
          <a :href="`mailto:${email}`" class="contacts__link" v-if="email">
            <IconEmail class="contacts__icon" />
            <span class="contacts__label" v-text="email" />
          </a>
        </div>
        <div class="header__talk">
          {{ talk }}
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AppLogo from "@/components/AppLogo";
import IconEmail from "@/components/icons/IconEmail";
import IconPhone from "@/components/icons/IconPhone";

export default {
  components: {
    AppLogo,
    IconEmail,
    IconPhone,
  },
  props: {
    header: {
      type: Object,
      required: true,
    },
  },
  computed: {
    nav: ({ header }) => header?.nav,
    email: ({ header }) => header?.email,
    phone: ({ header }) => header?.phone,
    talk: ({ header }) => header?.talk,
  },
};
</script>

<style lang="scss">
.header {
  color: #000;
  padding: 1.3rem 0;
  &__container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__actions {
    display: flex;
    align-items: center;
  }
  &__logo {
    width: 6.2rem;
    height: 3.2rem;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  &__nav {
    font-size: 1.5rem;
    padding: 0 3rem;
  }
  &__link {
    padding: 1.1rem 3rem;
    display: inline-block;
    color: currentColor;
  }
  &__info {
    display: flex;
    align-items: center;
  }
  &__contacts {
    display: flex;
    align-items: center;
    padding: 0 2.1rem;
  }
  &__talk {
    color: red;
    font-weight: 700;
    display: inline-flex;
    padding: 0.9rem;
    width: 10.5rem;
    background-color: #000;
  }
}
.contacts {
  font-size: 1.4rem;
  &__link {
    display: flex;
    align-items: center;
    padding: 0 1.8rem;
    color: currentColor;
  }
  &__icon {
    height: 1.5rem;
    svg {
      width: 100%;
      height: 100%;
      path,
      polygon {
        fill: currentColor;
      }
    }
  }
  &__label {
    display: inline-block;
    padding: 1.2rem;
  }
}
</style>
