export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.nName = ''
        this.img = data.img
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        this.id = data.id
        this.species = data.species
    }

    get Template() {
        return `<div class="bg-primary">
        <h1 class="text-center text-white">${this.name}</h1>
        <h4 class="text-center text-white">${this.height} | ${this.weight} | ${this.types}</h4>
        <img src="${this.img}" alt="" width="80%">
        <p>${this.species}</p>
        </div>`
    }
}