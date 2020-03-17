import { Injectable } from '@angular/core';
import { CursosType } from '../models/cursos';
import { CURSOS } from '../mocks/cursos.mock';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(): CursosType[] {
    return CURSOS.map((curso: CursosType) => curso)
  }
}
