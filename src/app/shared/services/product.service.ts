import { EventEmitter, Injectable } from '@angular/core';
import * as productsJson from "../../data/products.json";
import { Logger } from './logger.service';

@Injectable({
  providedIn:'root'
})
export class ProductService {
  private products: any[] = (productsJson as any).default;
  constructor(private logger: Logger) { }

  getProducts() {
    this.logger.log("getProducts Called"); 
    return this.products;
    //Will write some code to fetch data from API later
  }

  notify:EventEmitter<string> = new EventEmitter();

  userName:string="";
}
