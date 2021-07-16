import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: [
  ]
})
export class ProductDetailsComponent implements OnInit {

  product:any;
  constructor(private route:ActivatedRoute,private ps:ProductService,private router:Router) { }

  ngOnInit(): void {
    // this.product = this.ps.getProductDetails(this.route.snapshot.params.id);
    this.route.params.subscribe(param=>{
      this.product = this.ps.getProductDetails(param.id);
    });

    // console.log(this.route.snapshot.queryParams);
    this.route.queryParams.subscribe(qParams=>{
      console.log(qParams);
    });

    console.log(this.route.snapshot.fragment);
    this.route.fragment.subscribe(f=>console.log(f));
  }

  goBack(){
    this.router.navigate(['products']);
  }

}
