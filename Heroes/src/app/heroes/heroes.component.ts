import { Component, OnInit } from '@angular/core';

import { HeroService } from '../services/hero/hero.service'

import { HeroType } from '../model/hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  herosDisplay: HeroType[]
  selectedHero: HeroType

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.herosDisplay = heroes)
  }

  addHero(name: string): void {
    name = name.trim()
    if (!name) { return }
    this.heroService.addHero(({ name } as HeroType))
      .subscribe(hero => {
        this.herosDisplay.push(hero)
      })
  }

  deleteHero(hero: HeroType): void {
    this.herosDisplay = this.herosDisplay.filter(h => h !== hero)
    this.heroService.deleteHero(hero).subscribe()
  }

}
