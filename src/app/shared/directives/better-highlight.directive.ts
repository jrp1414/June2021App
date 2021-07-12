import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[better-highlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input('hc') highLightColor:string="";
  // @Input('dc') defaultColor:string="";
  @Input('better-highlight') defaultColor:string="";
  @HostBinding('style.backgroundColor') bgColor:string='';

  constructor(private el:ElementRef) { }
  ngOnInit(): void {
    // this.el.nativeElement.style.backgroundColor = this.defaultColor;
    this.bgColor = this.defaultColor;
  }

  @HostListener('click') onClick(){
    //this.el.nativeElement.style.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.bgColor  = this.highLightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.bgColor  = this.defaultColor;
  }

}
