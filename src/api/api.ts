const API_URL = 'https://rickandmortyapi.com/graphql';

export const GET_CHARACTERS = async (query: string) => {
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
  return data.characters.results;
};
