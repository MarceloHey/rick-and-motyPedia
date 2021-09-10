<template>
  <Hero class="home-hero">
    <template v-slot:title
      >Your favourite Rick and Morty Enciclopedia ;)</template
    >
  </Hero>
  <div class="home-links">
    <router-link to="/characters">
      <button>Characters</button>
    </router-link>
    <router-link to="/episodes">
      <button>Episodes</button>
    </router-link>
    <router-link to="/locations">
      <button>Locations</button>
    </router-link>
  </div>
</template>
<script lang="ts">
import Hero from "../components/Hero.vue";
export default {
  components: {
    Hero,
  },
};
</script>
<style lang="scss" scoped>
@import "../../public/scss/variables";
@import "../../public/scss/keyframes";
@import "../../public/scss/general";

.home-hero {
  display: flex;
  align-items: center;
  background-color: $ternary;
  background-image: url("../assets/home-background.png");
  background-repeat: no-repeat;
  height: 500px;
  overflow: hidden;
}

.home-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 120px 0;
  button {
    cursor: pointer;
    height: 60px;
    width: 300px;
    background: transparent;
    color: $secondary;
    font-size: 1.5rem;
    font-weight: bold;
    box-shadow: none;
    animation: anime-left 1s;
    border: 1px solid $secondary;
    border-radius: 0.5rem;
    &:hover {
      background: $secondary;
      color: $primary;
      transform: translateY(-10px);
      transition: 0.5s;
    }
  }
  @include device(small) {
    flex-direction: column;
    align-items: center;
    button {
      margin: 20px 0;
    }
  }
}
</style>