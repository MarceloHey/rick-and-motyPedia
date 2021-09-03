export const buildCharactersQuery = (nameFilter = '', page = 1): any => {
  return `{
    characters(page: ${page}, filter: {name: "${nameFilter}"}){
      results{
        id, 
        name, 
        status, 
        species, 
        type, 
        gender, 
        origin {
          id,
          name
        }, 
        location {
          id,
          name
        }, 
        image, 
        episode {
          id
        }, 
        created
      }
    }
  } `;
};

export const buildCharacterQuery = (id: string) => {
  return `{
    character(id: ${id}){
        id, 
        name, 
        status, 
        species, 
        type, 
        gender, 
        origin {
          id,
          name
        }, 
        location {
          id,
          name
        }, 
        image, 
        episode {
          id,
          name,
          air_date,
          episode
        }, 
        created
      
    }
  } `;
};

export const buildEpisodeQuery = (id: string) => {
  return `{
    episode(id: ${id}){
      id,
      name,
      air_date,
      episode,
      characters {
        id,
        name
      }
    }
  } `;
};
