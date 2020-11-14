<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__actions">
        <AppLogo class="footer__logo" />
        <nav class="footer__nav">nav</nav>
      </div>
      <div class="footer__contacts">
        <div class="footer__socials">
          <div class="footer__contact">
            {{ footer.email }}
          </div>
          <div class="footer__contact">
            {{ footer.phone }}
          </div>
        </div>
        <div class="footer__talk">
          {{ footer.talk }}
        </div>
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
};
</script>

<style>
.footer__logo {
  width: 100px;
  height: 100px;
  margin: auto;
}
</style>
