import { Component, OnInit } from '@angular/core';
import { MatIconRegistry }  from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-d-ng-class',
  templateUrl: './d-ng-class.component.html',
  styleUrls: ['./d-ng-class.component.css']
})
export class DNgClassComponent implements OnInit {

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      "home",
      sanitizer.bypassSecurityTrustResourceUrl("assets/home.svg")
    )
    iconRegistry.addSvgIcon(
      "homeStar",
      sanitizer.bypassSecurityTrustResourceUrl("assets/homeStar.svg")
    )
   }

  ngOnInit(): void {
  }

}
