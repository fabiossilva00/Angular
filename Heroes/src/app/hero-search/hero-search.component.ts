import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import {
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators'

import { HeroType } from '../model/hero.interface';
import { HeroService } from '../services/hero/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<HeroType[]>
  private searchTerms = new Subject<string>()

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTermsObservable()
  }

  search(term: string): void {
    this.searchTerms.next(term)
  }

  searchTermsObservable(): Observable<HeroType[]> {
    return this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term))
    )
  }

}
