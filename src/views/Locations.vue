<template>
  <div class="locations-wrapper">
    <div class="locations-filter--input">
      <label for="name-filter">Filter locations by name</label>
      <input
        @keyup="handleLocationSearch"
        name="name-filter"
        id="name-filter"
        type="text"
      />
    </div>
    <div v-if="!loading && locations" class="locations">
      <div class="pagination">
        <span v-if="page > 1" @click="changePage('back')" class="material-icons"
          >arrow_back_ios</span
        >
        <p>
          Page <span>{{ page }}</span> of {{ locations.info.pages }}
        </p>
        <span
          v-if="page !== locations.info.pages"
          @click="changePage('forward')"
          class="material-icons"
          >arrow_forward_ios</span
        >
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Dimension</th>
          </tr>
        </thead>
        <tbody>
          <tr
            @click="handleLocationClick(location.id)"
            v-for="location in locations.results"
            :key="location.id"
          >
            <td>
              {{ location.name }}
            </td>
            <td>
              {{ location.type }}
            </td>
            <td>
              {{ location.dimension }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Loading v-if="loading" />
    <div v-if="!loading && !locations">
      <p class="not-found">Nenhum resultado encontrado</p>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";
import Loading from "../components/Loading.vue";

export default {
  components: {
    Loading,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const page = ref(1);
    const nameFilter = ref("");

    const getLocations = async (locationFilter: string) => {
      store.dispatch("loadLocations", locationFilter);
    };

    const handleLocationClick = (id: number) => {
      if (id) {
        router.push({ name: "Location", params: { locationId: id } });
      }
    };

    const search = (value: string) => {
      nameFilter.value = value;
      page.value = 1;
      store.dispatch("loadLocations", {
        filter: nameFilter.value,
        page: page.value,
      });
    };

    let timer: number | undefined = undefined;
    const handleLocationSearch = ({ target }: any) => {
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
      store.dispatch("loadLocations", {
        filter: nameFilter.value,
        page: page.value,
      });
    };

    getLocations("");

    return {
      locations: computed(() => store.getters.locations),
      loading: computed(() => store.getters.loading),
      page,
      getLocations,
      handleLocationClick,
      handleLocationSearch,
      changePage,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../public/scss/variables";
@import "../../public/scss/keyframes";
.locations {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.locations-filter--input {
  margin-bottom: 20px;
  margin-top: 30px;
  margin-bottom: 60px;
}
</style>