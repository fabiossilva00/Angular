import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

import { HeroType } from '../model/hero.interface';

import { HeroService } from '../services/hero/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: HeroType

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSpecificHero()
  }

  getSpecificHero(): void {
    const id = +this.route.snapshot.paramMap.get('heroId')
    if (id !== 0 ) {
      this.heroService.getSpecificHero(id)
        .subscribe(hero => this.hero = hero)
    }
  }

  goBack(): void {
    this.location.back()
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack())
  }

}
