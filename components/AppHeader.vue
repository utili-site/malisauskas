<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__actions">
        <AppLogo class="header__logo" />
        <nav class="header__nav" v-if="nav">nav</nav>
      </div>
      <div class="header__contacts">
        <div class="header__socials">
          <div class="header__contact" v-if="email">
            {{ email }}
          </div>
          <div class="header__contact">
            {{ phone }}
          </div>
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
export default {
  components: {
    AppLogo,
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

<style>
.header__logo svg {
  width: 100px;
  height: 100px;
  margin: auto;
}
</style>
