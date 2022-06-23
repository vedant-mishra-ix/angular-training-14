import { Directive, ElementRef } from '@angular/core';
import {} from './app.component'

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  // constructor(private el : ElementRef){
  //   this.el.nativeElement.style.textDecoration = 'underline';
  //   this.el.nativeElement.style.textDecorationColor = 'red';
  //   this.el.nativeElement.style.fontSize = '20px';
  //   this.el.nativeElement.style.backgroundColor = 'rgba(0,0,0,.3)';
  // }
  // textUnderline()
  // {
  //   this.el.nativeElement.style.textDecoration = 'underline';
  // }
}
