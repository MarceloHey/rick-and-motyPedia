<template>
  <div class="home">
    <Hero class="home-hero">
      <template v-slot:title>Your favorite Rick and Morty WIKI ;)</template>
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

.home {
  height: 100%;
  background-color: $ternary;
  background-image: url("../assets/home-background.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100% 70%;
  background-position: center;
  object-fit: contain;
  @include device(small) {
    background-position: 35% 100%;
  }
}

.home-hero {
  display: flex;
  align-items: center;

  height: 300px;
  overflow: hidden;
}

.home-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 120px 0;
  button {
    cursor: pointer;
    text-shadow: 1.5px 1px #000;
    height: 60px;
    width: 300px;
    background: transparent;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    box-shadow: none;
    animation: anime-left 1s;
    border: 2px solid #fff;
    border-radius: 0.5rem;
    &:hover {
      text-shadow: none;
      background: $secondary;
      color: $primary;
      border-color: $secondary;
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