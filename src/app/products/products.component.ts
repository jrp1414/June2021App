import { Component, OnInit } from '@angular/core';
import * as productsJson from "../data/products.json";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent {
  public products: any[] = (productsJson as any).default;

  constructor() {
    
  }
}
