import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  valueInput: string
  labelString: string
  mouseOuvido: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  clicavel() {
    window.alert("Clicou")
  }

  onKeyUp(event: string): void {
    console.log(event)
    this.valueInput = event

  }

  onMouseOver(): void {
    this.mouseOuvido = !this.mouseOuvido
  }

}
