import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Logger } from '../shared/services/logger.service';
import { ProductService } from '../shared/services/product.service';


@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {

  constructor(private logger: Logger,private ps:ProductService) {

  }
  ngOnInit(): void {
    this.ps.notify.subscribe((data)=>{
      console.log(`Received in Product Thumbnail : ${data}`);
    });
  }

  @Input() product: any;
  @Output() pd: EventEmitter<string> = new EventEmitter();
  pageDate: Date = new Date();
  sendToParent() {
    let name = prompt("Enter name") ?? '';
    this.logger.log(`Before emitting ${name}`);
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

  getClass(product: any): string[] | string | any {
    if (product.rating > 3) {
      // return "green bold";
      // return ["green","bold"];
      return { green: true, bold: true };
    }
    return "red";
  }
}
