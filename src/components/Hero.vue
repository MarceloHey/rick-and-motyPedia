<template>
  <div class="hero">
    <h1 class="hero-title">
      <slot name="title"></slot>
    </h1>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style lang="scss" scoped>
@import "../../public/scss/variables";
@import "../../public/scss/keyframes";
@import "../../public/scss/general";

.hero {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .hero-title {
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 1px 1.5px #000;
    color: white;
    letter-spacing: 0.2rem;
    animation: anime-left 0.5s;
    margin-top: 100px;
    @include device(small) {
      font-size: 2rem;
    }
  }
}
</style>