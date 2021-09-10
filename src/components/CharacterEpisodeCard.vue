<template>
  <div class="character-card">
    <div>
      <div class="character-card--image">
        <img :src="image" alt="Imagem do personagem" />
      </div>
      <div class="character-card--info">
        <p class="character-card--name">
          <slot name="name"></slot>
        </p>
        <p class="character-card--status">
          <slot name="status"></slot>
        </p>
        <p class="character-card--species">
          <slot name="species"></slot>
        </p>
        <p class="character-card--gender">
          <slot name="gender"></slot>
        </p>
        <p class="character-card--origin">
          <slot name="origin"></slot>
        </p>
        <p class="character-card--location">
          <slot name="location"></slot>
        </p>
      </div>
    </div>
    <div class="character-card--episodes">
      <div class="character-card--apisodes-wrapper">
        <table class="character-card--episodes-table">
          <tr>
            <th>Name</th>
            <th>Episode</th>
            <th>Air Date</th>
          </tr>
          <tr
            @click="handleEpisodeClick(episode.id)"
            v-for="episode in episodes"
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
</template>
<script lang="ts">
import { useRouter } from "vue-router";

export default {
  props: {
    image: {
      type: String,
    },
    episodes: {
      required: false,
    },
  },

  setup() {
    const router = useRouter();

    const handleEpisodeClick = (id: string) => {
      router.push({ name: "Episode", params: { episodeId: id } });
    };

    return {
      handleEpisodeClick,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../public/scss/keyframes";
@import "../../public/scss/variables";

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
    p {
      font-size: 1.2rem;
      padding: 0.3rem 0;
    }
  }

  .character-card--image img {
    max-width: 100%;
    border: 2px solid $secondary;
    border-radius: 0.5rem;
  }
}

.character-card--episodes {
  align-self: flex-start;
  .character-card--episodes-table {
    width: 100%;
    text-align: left;

    tr {
      cursor: pointer;
      &:hover {
        background: $primary;
      }
    }

    td,
    th {
      padding: 10px 70px;
    }

    th {
      font-weight: bold;
      border-bottom: 2px solid $secondary;
      pointer-events: none;
      margin-bottom: 15px;
    }
  }
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: $ternary;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $text;
  border-radius: 0.5rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: $secondary;
}
</style>