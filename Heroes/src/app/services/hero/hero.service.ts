import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

import { MessagesService } from '../messages/messages.service';

import { HeroType } from '../../model/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient,
    private messageService: MessagesService
  ) { }

  getHeroes(): Observable<HeroType[]> {
    return this.http.get<HeroType[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log("HeroService: fetched heroes")),
        catchError(this.handleError<HeroType[]>('getHeroes', []))
      )
  }

  getSpecificHero(id: number): Observable<HeroType> {
    const url = `${this.heroesUrl}/${id}`
    return this.http.get<HeroType>(url)
      .pipe(
        tap(_ => this.log(`HeroService: fetched by id: ${id}`)),
        catchError(this.handleError<HeroType>(`getHero id: ${id}`))
      )
  }

  updateHero(hero: HeroType): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap(_ => this.log(`HeroService: update Hero with id: ${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      )
  }

  addHero(hero: HeroType): Observable<HeroType> {
    return this.http.post<HeroType>(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap((newHero: HeroType) => this.log(`HeroService: added Hero w/ id: ${newHero.id}`)),
        catchError(this.handleError<HeroType>('addHero'))
      )
  }

  deleteHero(hero: HeroType | number): Observable<HeroType> {
    const id = typeof hero === 'number' ? hero : hero.id
    const url = `${this.heroesUrl}/${id}`

    return this.http.delete<HeroType>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`HeroService: Deleted Hero with id: ${id}`)),
        catchError(this.handleError<HeroType>('deletedHero'))
      )
  }

  /**
   * Handle Http operation failed
   * @param operation - name of the operation thar failed
   * @param result - optional value to return as tha observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error:  any): Observable<T> => {
      // TODO: send the error to remote loggin infrastructure
      console.error(error)
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`)

      return of(result as T)
    }
  }

  private log(message: string) {
    this.messageService.add(message)
  }
}
