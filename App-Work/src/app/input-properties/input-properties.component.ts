import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css']
})
export class InputPropertiesComponent implements OnInit {
  @Input() nomeDoCurso: string

  constructor() { }

  ngOnInit(): void {
  }

}
