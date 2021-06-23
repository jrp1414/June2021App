import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twb',
  templateUrl: './twoway-binding.component.html',
  styles: [
  ]
})
export class TwowayBindingComponent {
  OnewayChange(data:any){
    this.OnewayMessage = data.target.value;
  }
  OnewayMessage:string="";
  OnewayTest(){
    this.OnewayMessage = "One way limitation tested";
  }
  //=======================================================================
  TwowayChange(data:string){
    console.log(data);
    this.TwowayMessage = data.toUpperCase();
  }
  TwowayMessage:string="";
  TwowayTest(){
    this.TwowayMessage = "Two way Testing";
  }

}
