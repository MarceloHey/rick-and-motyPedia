<template>
  <div class="character-details-wrapper">
    <div v-if="loading">
      <Loading />
    </div>
    <div v-if="!loading" class="character">
      <div class="character-card">
        <div>
          <div class="character-card--image">
            <img :src="character.image" alt="Imagem do personagem" />
          </div>
          <div class="character-card--info">
            <p class="character-card--name">
              {{ character.name }}
            </p>
            <p
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              {{ character.species }} <span :class="character.status" />{{
                character.status
              }}
            </p>
            <p><span>Gender: </span>{{ character.gender }}</p>
            <p
              class="character-card--origin"
              @click="handleLocationClick(character.origin.id)"
            >
              <span>Original from: </span>{{ character.origin.name }}
            </p>
            <p
              class="character-card--location"
              @click="handleLocationClick(character.location.id)"
            >
              <span>Last known location: </span>{{ character.location.name }}
            </p>
          </div>
        </div>
        <div class="character-card--episodes">
          <h1 class="title">Featurings</h1>
          <table class="table">
            <tr>
              <th>Name</th>
              <th>Episode</th>
              <th>Air Date</th>
            </tr>
            <tr
              @click="handleEpisodeClick(episode.id)"
              v-for="episode in character.episode"
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
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

import Loading from "../components/Loading.vue";

export default {
  components: {
    Loading,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const { characterId } = router.currentRoute.value.params;

    const getCharacter = async () => {
      store.dispatch("loadCharacter", characterId);
    };

    const handleEpisodeClick = (id: string) => {
      router.push({ name: "Episode", params: { episodeId: id } });
    };

    const handleLocationClick = (id: string) => {
      if (id) {
        router.push({ name: "Location", params: { locationId: id } });
      }
    };

    getCharacter();

    return {
      character: computed(() => store.getters.character),
      loading: computed(() => store.getters.loading),
      handleEpisodeClick,
      handleLocationClick,
    };
  },
};
</script>
<style lang="scss">
@import "../../public/scss/variables";
@import "../../public/scss/keyframes";

.character {
  padding: 0 50px;
}

.character-card {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex: 1;
  box-sizing: border-box;
  border-radius: 0.5rem;
  width: 100%;
  padding: 20px 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  background: $ternary;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
  transition: 0.2s;
  animation: anime-left 0.5s;
  overflow-x: auto;

  .character-card--info {
    text-align: center;
    margin-left: 20px;
    margin-bottom: 30px;
    .character-card--name {
      line-height: 1;
      font-size: 1.5rem;
      margin: 10px auto;
      &::after {
        content: "";
        display: block;
        margin: 5px auto;
        height: 2px;
        width: 200px;
        background: $text;
      }
    }
    .character-card--origin,
    .character-card--location {
      cursor: pointer;
      &:hover {
        color: $secondary;
      }
    }
    p {
      font-size: 1.2rem;
      padding: 0.3rem 0;
      span {
        color: #888;
      }
    }

    .Alive {
      display: inline-block;
      margin: 0 10px;
      width: 8px;
      height: 8px;
      background: #1ab912;
      border-radius: 50%;
    }

    .Dead {
      display: inline-block;
      margin: 0 10px;
      width: 8px;
      height: 8px;
      background: tomato;
      border-radius: 50%;
    }

    .unknown {
      display: inline-block;
      margin: 0 10px;
      width: 8px;
      height: 8px;
      background: $secondary;
      border-radius: 50%;
    }
  }

  .character-card--image img {
    max-width: 100%;
    border: 2px solid $secondary;
    border-radius: 0.5rem;
  }

  .table {
    tr {
      &:hover {
        background: $primary;
      }
    }
  }

  .character-card--episodes {
    max-width: 100%;
  }
}
</style>