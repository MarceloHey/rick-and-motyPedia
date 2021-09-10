import {
  GET_CHARACTERS,
  GET_CHARACTER,
  GET_EPISODE,
  GET_EPISODES,
  GET_LOCATIONS,
  GET_LOCATION,
} from '@/api/api';
import {
  buildCharactersQuery,
  buildCharacterQuery,
  buildEpisodeQuery,
  buildEpisodesQuery,
  buildLocationsQuery,
  buildLocationQuery,
} from '@/api/queries';
import { ICharacter, IEpisode, ILocation } from '@/api/interfaces';
import { createStore } from 'vuex';

// Create a new store instance.
export default createStore({
  state() {
    return {
      loading: false,
      characters: [],
      episodes: [],
      locations: [],
      character: {},
      episode: {},
      location: {},
    };
  },
  mutations: {
    SET_LOADING(state: any, loading: boolean) {
      state.loading = loading;
    },
    SET_CHARACTERS(state: any, characters: ICharacter[]) {
      state.characters = characters;
    },
    SET_CHARACTER(state: any, character: ICharacter) {
      state.character = character;
    },
    SET_EPISODES(state: any, episodes: IEpisode[]) {
      state.episodes = episodes;
    },
    SET_EPISODE(state: any, episode: IEpisode) {
      state.episode = episode;
    },
    SET_LOCATIONS(state: any, locations: ILocation[]) {
      state.locations = locations;
    },
    SET_LOCATION(state: any, location: ILocation) {
      state.location = location;
    },
  },
  actions: {
    async loadCharacters({ commit }: any, { filter = '', page = 1 }) {
      commit('SET_LOADING', true);
      const characters = await GET_CHARACTERS(
        buildCharactersQuery(filter, page),
      );
      commit('SET_CHARACTERS', characters);
      commit('SET_LOADING', false);
    },

    async loadCharacter({ commit }: any, characterId: string) {
      commit('SET_LOADING', true);
      const character = await GET_CHARACTER(buildCharacterQuery(characterId));
      commit('SET_CHARACTER', character);
      commit('SET_LOADING', false);
    },

    async loadEpisodes({ commit }: any, { filter = '', page = 1 }) {
      commit('SET_LOADING', true);
      const episodes = await GET_EPISODES(buildEpisodesQuery(filter, page));
      commit('SET_EPISODES', episodes);
      commit('SET_LOADING', false);
    },

    async loadEpisode({ commit }: any, episodeId: string) {
      commit('SET_LOADING', true);
      const episode = await GET_EPISODE(buildEpisodeQuery(episodeId));
      commit('SET_EPISODE', episode);
      commit('SET_LOADING', false);
    },

    async loadLocations({ commit }: any, { filter = '', page = 1 }) {
      commit('SET_LOADING', true);
      const locations = await GET_LOCATIONS(buildLocationsQuery(filter, page));
      commit('SET_LOCATIONS', locations);
      commit('SET_LOADING', false);
    },

    async loadLocation({ commit }: any, locationId: string) {
      commit('SET_LOADING', true);
      const location = await GET_LOCATION(buildLocationQuery(locationId));
      commit('SET_LOCATION', location);
      commit('SET_LOADING', false);
    },
  },
  getters: {
    loading: (state: any) => state.loading,
    characters: (state: any) => state.characters,
    character: (state: any) => state.character,
    episodes: (state: any) => state.episodes,
    episode: (state: any) => state.episode,
    locations: (state: any) => state.locations,
    location: (state: any) => state.location,
  },
});
