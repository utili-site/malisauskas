<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__copyright">
        <AppLogo class="footer__logo" />
        <div class="footer__footnote" v-text="footnote" />
      </div>
      <div class="footer__socials socials">
        <a :href="url" target="_blank" class="socials__link" :key="url" v-for="{ icon, label, url } in socials">
          <img class="socials__icon" :src="icon" />
          <span class="socials__label" v-text="label" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import AppLogo from "@/components/AppLogo";
export default {
  components: {
    AppLogo,
  },
  props: {
    footer: {
      type: Object,
      required: true,
    },
  },
  computed: {
    footnote: ({ footer }) => footer?.footnote,
    socials: ({ footer }) => footer?.socials,
    email: ({ footer }) => footer?.email,
    phone: ({ footer }) => footer?.phone,
    talk: ({ footer }) => footer?.talk,
  },
};
</script>

<style lang="scss">
.footer {
  color: #fff;
  background-color: #000;
  padding: 4.9rem 0;
  font-family: var(--secondaryFont);
  &__container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__copyright {
    display: flex;
    align-items: center;
  }
  &__logo {
    color: currentColor;
    width: 6.2rem;
    height: 3.2rem;
    svg {
      width: 100%;
      height: 100%;
      path,
      polygon {
        fill: currentColor;
      }
    }
  }
  &__footnote {
    color: #999;
    font-size: 1.4rem;
    font-weight: 500;
    padding: 0 2rem;
  }
  &__socials {
    display: flex;
    align-items: center;
  }
}
.socials {
  font-size: 1.4rem;
  &__link {
    display: flex;
    align-items: center;
    margin-left: 5rem;
    color: currentColor;
  }
  &__icon {
    height: 2rem;
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
    padding: 0.8rem 0 0.8rem 0.8rem;
  }
}
</style>
