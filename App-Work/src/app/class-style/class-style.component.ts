import { Component, OnInit } from '@angular/core';

import { CURSOS } from '../mocks/cursos.mock'

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {
  cursos = 'Valor'

  constructor() { }

  ngOnInit(): void {
  }

  funfun(value: string) {
    return value.length > 7 ? "none" : "block"
  }

}
