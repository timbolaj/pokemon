const axios = require('axios');

export const extractTypes = typesArr => {
  let typesList = [];
  typesArr.forEach(typ => {
    typesList.push(typ.type.name)
  })
  return typesList;
}

export const getEvolution = (url, setEvolution) => {
  return axios.get(url)
    .then(res => {
      if (res.data.evolves_from_species) {
        const parent = res.data.name;
        const child = res.data.evolves_from_species.name;
        setEvolution((prev) => ({ ...prev, [child]: parent }))
      }
    })
}

export const extractPokemon = (data, setData, setEvolution) => {
  data.forEach(datum => {
    return axios.get(datum.url)
      .then(res => {
        setData( prev => ([ ...prev,
          {
            name: res.data.name,
            height: res.data.height,
            weight: res.data.weight,
            id: res.data.id,
            sprite: res.data.sprites.front_default,
            types: extractTypes(res.data.types),
            species: res.data.species.url
          }
        ]))
        getEvolution(res.data.species.url, setEvolution)
      })
  })
}