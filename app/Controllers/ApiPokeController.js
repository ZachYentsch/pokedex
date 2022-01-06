import { ProxyState } from "../AppState.js";
import { apiPokesService } from "../Services/ApiPokesService.js";


function _drawAllPokes() {
    const apiPokes = ProxyState.apiPokes
    let template = ''
    apiPokes.forEach(p => template += `<li class="selectable p-1 text-white" onclick="app.apiPokesController.getActivePoke('${p.name}')">${p.name}</li>`);
    document.getElementById('api-pokes').innerHTML = template
}

function _drawActivePokes() {
    const poke = ProxyState.activePoke
    if (!poke) {
        document.getElementById('active-poke').innerHTML = ''
        return
    }
    document.getElementById('active-poke').innerHTML = poke.Template
}

async function _getAllPokes() {
    try {
        await apiPokesService.getAllApiPokes()
    } catch (error) {
        console.error(error)
    }
}

export class ApiPokesController {
    constructor() {
        ProxyState.on('apiPokes', _drawAllPokes)
        ProxyState.on('activePoke', _drawActivePokes)

        _getAllPokes()
    }

    async getActivePoke(pokeName) {
        try {
            await apiPokesService.getActivePokes(pokeName)
        } catch (error) {
            console.error(error)
        }
    }
}