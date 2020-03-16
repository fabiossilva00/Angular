import { Component } from '@angular/core';

import { HEROES } from './mocks/heroes.mock'
import Hero, { HeroType } from './models/hero'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasicsHeroes';
  heroes: HeroType[] = this.getHeroes()
  myHero: HeroType = this.heroes[0]

  getHeroes(): Hero[] {
    return HEROES.map((hero: HeroType) => new Hero(hero))
  }
}
