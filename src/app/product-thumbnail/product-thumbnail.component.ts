import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent {

  @Input() product: any;
  @Output() pd: EventEmitter<string> = new EventEmitter();
  pageDate:Date = new Date();
  sendToParent() {
    let name = prompt("Enter name") ?? '';
    this.pd.emit(name);
  }

  getStyle(product: any): any {
    if (product.rating > 3) {
      return {
        backgroundColor: 'chartreuse',
        color: 'blue',
        fontWeight: 'bold'
      };
    }
    return {
      'background-color': 'crimson',
      color: 'white',
      'font-style': 'italic'
    };
  }

  getClass(product:any) : string[] | string | any {
    if (product.rating > 3) {
      // return "green bold";
      // return ["green","bold"];
      return {green:true,bold:true};
    }
    return "red";
  }
}
