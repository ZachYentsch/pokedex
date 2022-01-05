export const pkmApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 8000
})

export const sboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/z6ch/pokemon',
    timeout: 8000
})