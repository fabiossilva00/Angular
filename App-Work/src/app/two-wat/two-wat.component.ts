import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-wat',
  templateUrl: './two-wat.component.html',
  styleUrls: ['./two-wat.component.css']
})
export class TwoWatComponent implements OnInit {
  nome: string = ""
  constructor() { }

  ngOnInit(): void {
  }

  verificaValorString(valor: string): string {
    if (valor.length > 7) {
      valor = ''
    }
    return valor
  }

}
