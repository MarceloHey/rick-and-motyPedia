export const buildCharactersQuery = (nameFilter = '', page = 1): string => {
  return `{
    characters(page: ${page}, filter: {name: "${nameFilter}"}){
      info{
        pages
      }
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
          id,
          name,
          air_date,
          episode
        }, 
      }
    }
  } `;
};

export const buildCharacterQuery = (id: string | string[]): string => {
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
    }
  } `;
};

export const buildEpisodeQuery = (id: string | string[]): string => {
  return `{
    episode(id: ${id}){
      id,
      name,
      air_date,
      episode,
      characters {
        id,
        name,
        image
      }
    }
  } `;
};

export const buildEpisodesQuery = (episodeFilter = '', page = 1): string => {
  return `{
    episodes(page: ${page}, filter: {name: "${episodeFilter}"}) {
      info {
       pages
     },
     results {
       id,
       name,
       air_date,
       episode,
     }
    }
  } `;
};

export const buildLocationsQuery = (locationFilter = '', page = 1): string => {
  return `{
    locations(page: ${page}, filter: {name: "${locationFilter}"}) {
      info {
       pages
     },
     results {
       id,
       name,
       type,
       dimension,
       residents {
         id,
         name,
         image
       }
     }
    }
  } `;
};

export const buildLocationQuery = (id: string | string[]): string => {
  return `{
    location(id: ${id}) {
      id,
      name,
      type,
      dimension,
      residents {
        id,
        name,
        image
      }
    }
  } `;
};
