export const buildCharacterQuery = (nameFilter = ''): any => {
  return `{
    characters(filter: {name: "${nameFilter}"}){
      results{
        id, 
        name, 
        status, 
        species, 
        type, 
        gender, 
        origin {
          id
        }, 
        location {
          id
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
