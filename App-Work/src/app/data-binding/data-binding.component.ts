import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: string = 'www.google.com'
  cursoAngular: boolean = true
  urlImage: string = "https://i.picsum.photos/id/1010/200/200.jpg"

  constructor() { }

  ngOnInit(): void {
  }

  getValor(): number {
    return 1
  }

  butao(): void {
    console.log("Funcionou")
  }

  inputando(value: string): void {
    console.log(value)
  }

}
