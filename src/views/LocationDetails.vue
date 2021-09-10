<template>
  <div class="location-details-wrapper">
    <Loading v-if="loading" />
    <div class="location" v-if="!loading && location">
      <div class="location-info">
        <p>{{ location.name }}</p>
        <span class="material-icons">remove</span>
        <p>{{ location.type }}</p>
      </div>
      <p style="color: #888; margin-bottom: 30px; font-size: 1.5rem">
        {{ location.dimension }}
      </p>
      <div v-if="location.residents.length > 0">
        <h1 class="title">Residents</h1>
        <div class="location-residents">
          <div v-for="resident in location.residents" :key="resident.id">
            <CharacterCard
              :image="resident.image"
              @click="handleResidentClick(resident.id)"
            >
              <template v-slot:name>{{ resident.name }}</template>
            </CharacterCard>
          </div>
        </div>
      </div>
      <div v-else>
        <h1 class="title" style="color: #888">No Residents</h1>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

import Loading from "../components/Loading.vue";
import CharacterCard from "../components/CharacterCard.vue";

export default {
  components: {
    Loading,
    CharacterCard,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const { locationId } = router.currentRoute.value.params;

    const getLocation = async () => {
      store.dispatch("loadLocation", locationId);
    };

    const handleResidentClick = (id: string) => {
      router.push({ name: "Character", params: { characterId: id } });
    };

    getLocation();

    return {
      location: computed(() => store.getters.location),
      loading: computed(() => store.getters.loading),
      handleResidentClick,
    };
  },
};
</script>
<style lang="scss" scoped>
.location {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  .location-residents {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .location-info {
    display: flex;
    align-items: center;
    p {
      margin: 0 10px;
      font-size: 1.8rem;
      font-weight: bold;
      line-height: 2;
    }
  }
}
</style>