import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private elementRef: ElementRef,
    private _renderer: Renderer2
  ) {
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow'
    this._renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "yellow"
      )
  }

}
