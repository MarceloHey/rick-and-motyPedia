<template>
  <div class="episodes-wrapper">
    <div class="episodes-filter--input">
      <label for="name-filter">Filter episodes by name</label>
      <input
        @keyup="handleEpisodeSearch"
        name="name-filter"
        id="name-filter"
        type="text"
      />
    </div>
    <div v-if="!loading && episodes" class="episodes">
      <div class="pagination">
        <span v-if="page > 1" @click="changePage('back')" class="material-icons"
          >arrow_back_ios</span
        >
        <p>
          Page <span>{{ page }}</span> of {{ episodes.info.pages }}
        </p>
        <span
          v-if="page !== episodes.info.pages"
          @click="changePage('forward')"
          class="material-icons"
          >arrow_forward_ios</span
        >
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Episode</th>
            <th>Air Date</th>
          </tr>
        </thead>
        <tbody>
          <tr
            @click="handleEpisodeClick(episode.id)"
            v-for="episode in episodes.results"
            :key="episode.id"
          >
            <td>
              {{ episode.name }}
            </td>
            <td>
              {{ episode.episode }}
            </td>
            <td>
              {{ episode.air_date }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Loading v-if="loading" />
    <div v-if="!loading && !episodes">
      <p class="not-found">Nenhum resultado encontrado</p>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import router from "@/router";
import { useStore } from "vuex";
import { computed } from "vue";

import Loading from "../components/Loading.vue";

export default {
  components: {
    Loading,
  },
  setup() {
    const store = useStore();
    const page = ref(1);
    const nameFilter = ref("");

    const getEpisodes = async (filter: string) => {
      store.dispatch("loadEpisodes", filter);
    };

    const handleEpisodeClick = (id: string) => {
      router.push({ name: "Episode", params: { episodeId: id } });
    };

    const search = (value: string) => {
      nameFilter.value = value;
      page.value = 1;
      store.dispatch("loadEpisodes", {
        filter: nameFilter.value,
        page: page.value,
      });
    };

    let timer: number | undefined = undefined;
    const handleEpisodeSearch = ({ target }: any) => {
      if (timer) {
        window.clearTimeout(timer);
      }
      timer = window.setTimeout(function () {
        search(target.value);
      }, 500);
    };

    const changePage = async (direction: string) => {
      if (direction === "back") --page.value;
      if (direction === "forward") ++page.value;
      store.dispatch("loadEpisodes", {
        filter: nameFilter.value,
        page: page.value,
      });
    };

    getEpisodes("");

    return {
      episodes: computed(() => store.getters.episodes),
      loading: computed(() => store.getters.loading),
      page,
      getEpisodes,
      handleEpisodeClick,
      handleEpisodeSearch,
      changePage,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/scss/variables";
@import "../../public/scss/keyframes";

.episodes {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.episodes-filter--input {
  margin-bottom: 20px;
  margin-top: 30px;
  margin-bottom: 60px;
  transition: 0.2s;
}
</style>