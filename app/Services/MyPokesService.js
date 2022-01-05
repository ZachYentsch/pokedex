import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { sboxApi } from "./AxiosService.js";

class MyPokesService {
    async MyPokes() {
        const res = await sboxApi.get('')
        console.log(res.data)
        ProxyState.myPokes = res.data.map(p => new Pokemon(p))
    }

    setActivePokes(id) {
        let pokes = ProxyState.myPokemon.find(p => p.id == id)
        if (!pokes) {
            console.log(error.message)
            return
        }
        ProxyState.activePokemon = pokes
    }

    // async addPokes






}