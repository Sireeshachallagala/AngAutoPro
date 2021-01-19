import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighting]'
})
export class HighlightingDirective {
@Input('appHighlighting') highlightcolor: string;
  constructor(private el:ElementRef) { }

@HostListener ('mouseenter') onmouseenter(){
  this.highlight('color');
}
@HostListener ('mouseleave') onmouseleave(){
  this.highlight(null);
}
private highlight(color:string){
  this.el.nativeElement.style.backgroundColor=color;
}
}
