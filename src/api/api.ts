import { ICharacter, IEpisode, ICharacters, ILocation } from './interfaces';

const API_URL = 'https://rickandmortyapi.com/graphql';

export const GET_CHARACTERS = async (query: string): Promise<ICharacters> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        query,
      }),
    });
    const { data } = await response.json();
    return data.characters;
  } catch (err) {
    throw new Error();
  }
};

export const GET_CHARACTER = async (query: string): Promise<ICharacter> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  });
  const { data } = await response.json();
  return data.character;
};

export const GET_EPISODE = async (query: string): Promise<IEpisode> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  });
  const { data } = await response.json();
  return data.episode;
};

export const GET_EPISODES = async (query: string): Promise<IEpisode[]> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  });
  const { data } = await response.json();
  return data.episodes;
};

export const GET_LOCATIONS = async (query: string): Promise<ILocation[]> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  });
  const { data } = await response.json();
  return data.locations;
};

export const GET_LOCATION = async (query: string): Promise<ILocation> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  });
  const { data } = await response.json();
  return data.location;
};
