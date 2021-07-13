import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[better-highlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input('hc') highLightColor:string="";
  // @Input('dc') defaultColor:string="";
  @Input('better-highlight') defaultColor:string="";
  @HostBinding('style.backgroundColor') bgColor:string='';

  
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

  constructor(private el:ElementRef) { 
    let person1 = new Person("Ram","Pune");
        
  }
}


// class Person{
//   constructor(_name:string,_address:string){
//     this.name = _name;
//     this.address = _address;
//   }

//   name:string;
//   address:string;
// }

class Person{
  constructor(public fname:string,public address:string){
  }
}