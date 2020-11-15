<template>
  <div class="extrude">
    <div class="extrude__wrapper">
      <div class="extrude__cropper">
        <div class="extrude__content">
          <h2 class="extrude__title" v-text="title" />
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
</template>

<script>
import AppBlob from "@/components/AppBlob";
import AppBtn from "@/components/AppBtn";
import PageIntro from "@/components/PageIntro";
import PageProcess from "@/components/PageProcess";

export default {
  components: {
    AppBlob,
    AppBtn,
    PageIntro,
    PageProcess,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
$depth: 4.6rem;
$border: 0.3rem;

.extrude {
  margin-right: (-$depth);
  margin-top: (-$depth);
  &__wrapper {
    padding: $depth 0 0 $depth;
    // margin: (-$depth) 0 0 (-$depth);
    position: relative;
  }
  &__cropper {
    overflow: hidden;
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
  &__base {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: calc(100% - #{$depth});
    background: #b29d83;
    z-index: 1;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 4;
      border-right: solid $border #000;
      border-bottom: solid $border #000;
    }
    &:after {
      content: "";
      position: absolute;
      right: $border / 2;
      bottom: 0;
      width: 100%;
      height: $border;
      background-color: #000;
      z-index: 2;
      transform-origin: 100% 100%;
      transform: rotate(45deg);
    }
  }
  &__content {
    border: solid $border #000;
    position: relative;
    z-index: 4;
    background-color: #fff;
    padding: 5.9rem 44% 1rem 4.7rem;
    min-height: 44.6rem;
  }
  &__image {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 55.5%;
    height: 85.6%;
    object-position: 100% 100%;
    object-fit: contain;
    z-index: -1;
    pointer-events: none;
  }
  &__line {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #b29d83;

    &--left {
      border-bottom: $border solid #000;
      transform-origin: 100% 100%;
      transform: rotate(45deg);
      right: 100%;
      top: 0;
      z-index: 3;
    }
    &--top {
      border-top: $border solid #000;
      transform-origin: 100% 0;
      transform: rotate(45deg);
      right: 0;
      top: 0;
      z-index: 3;
    }
  }
  &__text {
    padding: 2.8rem 0;
    max-width: 25rem;
  }
  &:hover {
    .extrude {
      &__wrapper {
        padding: 0;
      }
      &__cropper {
        padding: 0 $depth $depth 0;
      }
      &__base {
        width: calc(100% - #{$depth});
      }
    }
  }
}
</style>
