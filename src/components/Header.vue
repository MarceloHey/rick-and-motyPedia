<template>
  <header class="header">
    <router-link to="/">
      <img src="../assets/Rick_and_Morty.svg" alt="Site logo" />
    </router-link>
    <ul class="header-links">
      <router-link to="/characters">
        <li :class="currentRoute === 'Characters' ? 'active' : ''">
          CHARACTERS
        </li>
      </router-link>
      <router-link to="/episodes">
        <li :class="currentRoute === 'Episodes' ? 'active' : ''">EPISODES</li>
      </router-link>
      <router-link to="/locations">
        <li :class="currentRoute === 'Locations' ? 'active' : ''">LOCATIONS</li>
      </router-link>
    </ul>
  </header>
</template>
<script lang="ts">
import { ref, watch } from "vue";
import router from "@/router";

export default {
  setup() {
    const currentRoute = ref(router.currentRoute.value.name || "Home");

    watch(router.currentRoute, (route: any) => {
      currentRoute.value = route?.matched[0]?.name || "";
    });

    return {
      currentRoute,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../public/scss/variables";
@import "../../public/scss/general";

.header {
  min-height: 80px;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: $ternary;
  img {
    max-width: 180px;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }

  li.active {
    color: $secondary;
  }

  @include device(small) {
    flex-direction: column;
  }
}

.header-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  li {
    margin: 40px;
    cursor: pointer;
    color: white;
    a {
      text-decoration: none;
      color: white;
      &:hover {
        color: $secondary;
      }
    }
  }

  @include device(small) {
    flex-direction: column;
    li {
      margin: 10px;
      border: 1px solid $secondary;
      border-radius: 0.5rem;
      padding: 10px;
      width: 200px;
      &:hover {
        background: $secondary;
      }
      a {
        &:hover {
          color: $primary;
        }
      }
    }
    li.active {
      color: white;
      background: $secondary;
    }
  }
}
</style>