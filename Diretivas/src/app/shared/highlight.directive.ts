import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener("mouseover") onChangeOver() {
    this.backgroundColor = this.defaultColor
  }

  @HostListener("mouseleave") onChangeLeave() {
    this.backgroundColor = this.highlightColor
  }

  @HostBinding('style.backgroundColor') backgroundColor: string

  @Input() defaultColor: string = 'white'
  @Input('highlight') highlightColor: string = 'yellow'

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor
  }

}
