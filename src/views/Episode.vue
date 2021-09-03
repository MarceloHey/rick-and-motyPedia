<template>
  <!-- <div>{{ episode }}</div> -->
  <div v-for="character in episode.characters" :key="character.id">
    <p @click="handleCharacterClick(character.id)">{{ character.name }}</p>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { GET_EPISODE } from "@/api/api";
import { buildEpisodeQuery } from "@/api/queries";
export default {
  setup() {
    const router = useRouter();
    const { episodeId } = router.currentRoute.value.params;
    const episode = ref({});

    const getEpisode = async () => {
      episode.value = await GET_EPISODE(buildEpisodeQuery(episodeId[0]));
    };

    const handleCharacterClick = (id: string) => {
      router.push({ name: "Character", params: { characterId: id } });
    };

    getEpisode();

    return {
      episode,
      handleCharacterClick,
    };
  },
};
</script>
<style lang="scss">
</style>