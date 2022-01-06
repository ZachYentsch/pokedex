import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pkmApi } from "./AxiosService.js";

class ApiPokesService {
    async getAllApiPokes() {
        const res = await pkmApi.get('')
        console.log(res.data.results)
        ProxyState.apiPokes = res.data.results
    }

    async getActivePokes(pokesName) {
        console.log(pokesName)
        const res = await pkmApi.get(pokesName)
        console.log(res.data)
        ProxyState.activePoke = new Pokemon(res.data)
    }
}

export const apiPokesService = new ApiPokesService()