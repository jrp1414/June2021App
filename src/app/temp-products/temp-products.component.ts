import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'temp-products',
  template: `
    <p>
      temp-products works!
    </p>
  `,
  // providers:[ProductService]
})
export class TempProductsComponent implements OnInit {

  constructor(private ps: ProductService) { }
  ngOnInit(): void {
    this.ps.notify.subscribe((data) => {
      console.log(`Received in Temp Products : ${data}`);
    });
    console.log(this.ps.userName);
  }

}
