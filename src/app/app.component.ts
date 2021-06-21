import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  // selector:"app-main", // Element Selector
  // selector:"[app-main]", // Attribute Selector
  selector:".app-main", //Class selector
  // template:"<h1>Inline HTML Template example</h1>"+
  // "<h2>Inline template example line 2</h2>"
  // template:`
  // <h1>Multiline template example Line 1</h1>
  // <h2>Multiline template example Line 2</h2>
  // <h3>Multiline template example Line 3</h3>
  // `
  templateUrl:"./app.component.html",
  // styles:[`h1{
  //   background-color: aqua;
  // }`],
  styleUrls:[
    "./app.component.css"
  ]
  // encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  constructor(){
    
  }
}




export enum color{
  red,
  green,
  blue
}