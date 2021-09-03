<template>
  <div class="character">
    <CharacterEpisodeCard class="character-card" :image="character.image">
      <template v-slot:name>{{ character.name }}</template>
      <template v-slot:status>Status: {{ character.status }}</template>
      <template v-slot:species>Species: {{ character.species }}</template>
      <template v-slot:gender>Gender: {{ character.gender }}</template>
      <template v-slot:origin>Origin: {{ character.origin.name }}</template>
      <template v-slot:location
        >Location: {{ character.location.name }}</template
      >
    </CharacterEpisodeCard>
    <div class="character-episodes">
      <div v-for="episode in character.episode" :key="episode.id">
        <EpisodeCard @click="handleEpisodeClick(episode.id)">
          <template v-slot:episode>Episode: {{ episode.episode }}</template>
          <template v-slot:name>Name: {{ episode.name }}</template>
          <template v-slot:air_date>Air Date: {{ episode.air_date }}</template>
        </EpisodeCard>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { GET_CHARACTER } from "../api/api";
import { buildCharacterQuery } from "../api/queries";
import EpisodeCard from "../components/EpisodeCard.vue";
import CharacterEpisodeCard from "../components/CharacterEpisodeCard.vue";

export default {
  components: {
    EpisodeCard,
    CharacterEpisodeCard,
  },
  setup() {
    const router = useRouter();
    const { characterId } = router.currentRoute.value.params;
    const character = ref({});

    const getCharacter = async () => {
      character.value = await GET_CHARACTER(
        buildCharacterQuery(characterId[0])
      );
    };

    const handleEpisodeClick = (id: string) => {
      router.push({ name: "Episode", params: { episodeId: id } });
    };

    getCharacter();

    return {
      character,
      handleEpisodeClick,
    };
  },
};
</script>
<style lang="scss">
.character-episodes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>