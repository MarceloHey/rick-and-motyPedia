<template>
  <div class="characters-wrapper">
    <div class="characters">
      <div class="characters-filter--input">
        <label for="name-filter">Filter characters by name</label>

        <input
          @keyup="handleCharacterSearch"
          name="name-filter"
          id="name-filter"
          type="text"
        />
      </div>
      <div v-if="characters && !loading">
        <div class="pagination">
          <span
            v-if="page > 1"
            @click="changePage('back')"
            class="material-icons"
            >arrow_back_ios</span
          >
          <p>
            Page <span>{{ page }}</span> of {{ characters.info.pages }}
          </p>
          <span
            v-if="page !== characters.info.pages"
            @click="changePage('forward')"
            class="material-icons"
            >arrow_forward_ios</span
          >
        </div>
        <div>
          <div class="character-cards">
            <div v-for="character in characters.results" :key="character.id">
              <CharacterCard
                :image="character.image"
                @click="handleCharacterClick(character.id)"
              >
                <template v-slot:name>{{ character.name }}</template>
              </CharacterCard>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loading v-if="loading" />
    <div v-if="!loading && !characters">
      <p class="not-found">Nenhum resultado encontrado</p>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

import CharacterCard from "../components/CharacterCard.vue";
import Loading from "../components/Loading.vue";

export default {
  components: {
    CharacterCard,
    Loading,
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const page = ref(1);
    const namefilter = ref("");

    const getCharacters = async (nameFilter: string) => {
      store.dispatch("loadCharacters", nameFilter);
    };

    const handleCharacterClick = (id: string) => {
      router.push({ name: "Character", params: { characterId: id } });
    };

    const search = (value: string) => {
      namefilter.value = value;
      page.value = 1;
      store.dispatch("loadCharacters", {
        filter: namefilter.value,
        page: page.value,
      });
    };

    let timer: number | undefined = undefined;
    const handleCharacterSearch = ({ target }: any) => {
      if (timer) {
        window.clearTimeout(timer);
      }
      timer = window.setTimeout(function () {
        search(target.value);
      }, 1000);
    };

    const changePage = async (direction: string) => {
      if (direction === "back") --page.value;
      if (direction === "forward") ++page.value;
      store.dispatch("loadCharacters", {
        filter: namefilter.value,
        page: page.value,
      });
    };

    getCharacters("");

    return {
      characters: computed(() => store.getters.characters),
      loading: computed(() => store.getters.loading),
      page,
      getCharacters,
      handleCharacterClick,
      handleCharacterSearch,
      changePage,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../public/scss/variables";
@import "../../public/scss/keyframes";

.characters {
  .character-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  h1 {
    font-size: 3rem;
    line-height: 2;
    font-family: monospace;
  }
}

.characters-filter--input {
  margin-bottom: 20px;
  margin-top: 30px;
  margin-bottom: 60px;
}
</style>
