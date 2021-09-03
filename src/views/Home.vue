<template>
  <div class="home">
    <h1>Personagens</h1>
    <div class="characters-filter--input">
      <label for="name-filter">Filtrar por nome</label>
      <input name="name-filter" id="name-filter" type="text" />
    </div>
    <div class="character-cards">
      <div v-for="character in characters" :key="character.id">
        <CharacterCard
          :image="character.image"
          @click="handleCharacterClick(character.id)"
        >
          <template v-slot:name>{{ character.name }}</template>
          <template v-slot:status>Status: {{ character.status }}</template>
          <template v-slot:species>Species: {{ character.species }}</template>
          <template v-slot:gender>Gender: {{ character.gender }}</template>
          <template v-slot:origin>Origin: {{ character.origin.name }}</template>
          <template v-slot:location
            >Location: {{ character.location.name }}</template
          >
        </CharacterCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import { GET_CHARACTERS } from "../api/api";
import { buildCharactersQuery } from "../api/queries";
import CharacterCard from "../components/CharacterCard.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    CharacterCard,
  },

  setup() {
    const router = useRouter();
    const characters = ref({});

    const getCharacters = async (nameFilter: string) => {
      characters.value = await GET_CHARACTERS(buildCharactersQuery(nameFilter));
    };

    const handleCharacterClick = (id: string) => {
      router.push({ name: "Character", params: { characterId: id } });
    };

    getCharacters("");

    return {
      characters,
      getCharacters,
      handleCharacterClick,
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  .character-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  h1 {
    font-size: 3rem;
    line-height: 2;
  }
}

.characters-filter--input {
  margin-bottom: 20px;
  input {
    margin: 0 auto;
    border: 1px solid #eee;
    text-align: center;
    display: block;
    width: 500px;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: #eee;
    transition: 0.2s;
    &:hover,
    &:focus {
      outline: none;
      border-color: #fb1;
      background: white;
      box-shadow: 0 0 0 3px #fea;
    }
  }

  label {
    display: block;
    font-size: 1.5rem;
    line-height: 1;
    padding-bottom: 0.5rem;
  }
}
</style>
