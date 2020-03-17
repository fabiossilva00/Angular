import { Component, OnInit } from '@angular/core';
import { CursosType } from '../models/cursos';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  nomePortal: string
  cursos: CursosType[]

  constructor(
    private cursosService: CursosService
  ) {
    this.nomePortal = "NomePortal"
    // this.cursos = this.getCursos()
    this.cursos = this.cursosService.getCursos()
  }

  ngOnInit(): void {
  }

  // getCursos(): CursosType[] {
  //   return this.cursosService.getCursos()
  // }

}
