// Custom Attribute directive

import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:"[basic-highlight]"
})
export class BasicHighlightDirective implements OnInit{

    constructor(private el:ElementRef) {
        
    }

    ngOnInit(): void {
        // console.log(this.el.nativeElement.style.backgroundColor);
        this.el.nativeElement.style.backgroundColor = "yellow";
        // console.log(this.el.nativeElement.style.backgroundColor);
    }

}

