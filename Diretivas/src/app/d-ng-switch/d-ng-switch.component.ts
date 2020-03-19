import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-ng-switch',
  templateUrl: './d-ng-switch.component.html',
  styleUrls: ['./d-ng-switch.component.css']
})
export class DNgSwitchComponent implements OnInit {
  clickDoBotao: string
  changeToogle: string = "Default"

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    console.log(event)
  }

  aboutChange(select: string) {
    this.changeToogle = select
  }

}
