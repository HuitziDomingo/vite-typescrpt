

export class FavoriteAnime{
    private name: string

    constructor(name: string){
        this.name = name
    }
    info() : string{
        return this.name
    }
}

const anime = new FavoriteAnime('Hunter X Hunter')

console.log(anime.info())