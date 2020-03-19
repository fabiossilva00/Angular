import { Component, OnInit } from '@angular/core';

import { CURSOS } from '../mocks/cursos.mocks'
import { CursoType } from '../model/cursos.interface';

@Component({
  selector: 'app-d-ng-if',
  templateUrl: './d-ng-if.component.html',
  styleUrls: ['./d-ng-if.component.css']
})
export class DNgIfComponent implements OnInit {
  cursos: CursoType[] = []

  constructor() { }

  ngOnInit(): void {
    this.cursos = this.getCursosType()
  }

  removeItens(): void {
    this.cursos = []
  }

  addItens(): void {
    this.cursos = this.getCursosType()
  }

  getCursosType(): CursoType[] {
    return CURSOS.map((curso: CursoType) => curso)
  }

}
