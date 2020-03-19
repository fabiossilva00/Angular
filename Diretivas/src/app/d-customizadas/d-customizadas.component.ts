import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-customizadas',
  templateUrl: './d-customizadas.component.html',
  styleUrls: ['./d-customizadas.component.css']
})
export class DCustomizadasComponent implements OnInit {
  mostrarCurso: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCursos() {
    this.mostrarCurso = !this.mostrarCurso
  }

}
