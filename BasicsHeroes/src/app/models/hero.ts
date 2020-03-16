export type HeroType = {
  id: number
  name: string
}

export default class Hero {
  public id: number
  public name: string
  constructor(hero: HeroType) {
    this.id = hero.id,
    this.name = hero.name
  }
}
