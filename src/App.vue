<template>
  <Header />
  <div class="content">
    <router-view />
  </div>
  <Footer class="footer" />
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
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;
  .content {
    flex: 1 1 auto;
  }
}

body {
  background: $primary;
  margin: 0;
  padding: 0;
}
</style>
