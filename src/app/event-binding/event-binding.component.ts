import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb',
  templateUrl: './event-binding.component.html',
  styles: [
  ]
})
export class EventBindingComponent{

  onButtonClicked(){
    this.message = "Button Clicked";
  }
  message:string="";

  onMouseEnter(){
    this.message = "Mouse Entered";
  }
  onMouseLeave(){
    this.message = "Mouse Left";
  }

  onTextChanged(data:any){
    this.message = data.target.value;
  }

  message2:string="";
  onKeyUp(data:any){
    this.message2=data.target.value;
  }

}
