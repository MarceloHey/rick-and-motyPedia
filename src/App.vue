<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "../public/scss/reset";
@import "../public/scss/variables";
@import "../public/scss/general";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text;
}
body {
  background: $primary;
}
</style>
