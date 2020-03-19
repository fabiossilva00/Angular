import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-ng-style',
  templateUrl: './d-ng-style.component.html',
  styleUrls: ['./d-ng-style.component.css']
})
export class DNgStyleComponent implements OnInit {
  ativo: boolean = false
  tamanhoFonte: number = 10

  constructor() { }

  ngOnInit(): void {
  }

  changeValue() {
    this.ativo = !this.ativo
  }



}
