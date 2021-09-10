<template>
  <div class="episode-details-wrapper">
    <Loading v-if="loading" />
    <div v-else class="episode-card">
      <div class="episode-info">
        <p>{{ episode.name }}</p>
        <span class="material-icons">remove</span>
        <p>{{ episode.episode }}</p>
      </div>
      <p style="color: #888; margin-bottom: 30px; font-size: 1.5rem">
        {{ episode.air_date }}
      </p>
      <h1 class="title">Featuring</h1>
      <div class="episode-characters">
        <div v-for="character in episode.characters" :key="character.id">
          <CharacterCard
            @click="handleCharacterClick(character.id)"
            :image="character.image"
          >
            <template v-slot:name>{{ character.name }}</template>
          </CharacterCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import CharacterCard from "../components/CharacterCard.vue";
import Loading from "../components/Loading.vue";

export default {
  components: {
    CharacterCard,
    Loading,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const { episodeId } = router.currentRoute.value.params;

    const getEpisode = async () => {
      store.dispatch("loadEpisode", episodeId);
    };

    const handleCharacterClick = (id: string) => {
      router.push({ name: "Character", params: { characterId: id } });
    };

    getEpisode();

    return {
      episode: computed(() => store.getters.episode),
      loading: computed(() => store.getters.loading),
      handleCharacterClick,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../public/scss/variables";

.episode-card {
  border-radius: 0.5rem;
  padding: 20px 10px;
  margin: 20px;
  background: $ternary;
  box-shadow: rgba(0, 0, 0, 1) 0px 1px 4px;
  transition: 0.2s;
  animation: anime-left 0.5s;
}

.episode-info {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 0;
  p {
    margin: 0 10px;
    font-weight: bold;
    font-size: 1.8rem;
  }
}

.episode-characters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>