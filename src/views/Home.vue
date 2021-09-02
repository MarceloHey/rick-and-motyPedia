<template>
  <div class="home">
    <div v-for="character in characters" :key="character.id">
      {{ character.name }}
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import { GET_CHARACTERS } from "../api/api";
import { buildCharacterQuery } from "../api/queries";

export default {
  setup() {
    const characters = ref({});
    const getCharacters = async () => {
      characters.value = await GET_CHARACTERS(buildCharacterQuery());
    };

    getCharacters();

    return {
      characters,
      getCharacters,
    };
  },
};
</script>
