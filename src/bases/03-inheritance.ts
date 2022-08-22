import { FavoriteAnime } from "./02-class"

import { Product } from "./04-interface"

export class Characters extends FavoriteAnime implements Product {
    private character: string
    gender: string

    getGender(): string {
        return "Genero: " + this.gender 
    }

    constructor(character: string, name: string) {
        super(name)
        this.character = character
    }

    info(): string {
        return super.info() + " " + this.character
    }
}

const characters: Characters = new Characters("Gone", "HunterXHunter")

console.log(characters.info())