import { Component, OnInit } from '@angular/core';
import * as productsJson from "../data/products.json";
import { Logger } from '../shared/services/logger.service';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ],
  // providers:[Logger]
  // providers:[ProductService]
}) 
export class ProductsComponent {

  products:any[]=[];

  constructor(private logger:Logger,public ps:ProductService) {
    this.products = this.ps.getProducts();
  }
  filterText:string="";

  receivedFromChild(data:any){
    this.logger.log(`Received in parent :  ${data}`);
  }

  releaseData(){
    this.ps.notify.emit(prompt("Write Message")?.toString());
  }
}
