import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  // product to be updated
  product: Product;
  constructor(private productService: ProductsService,
    private router: Router) {
   
    // object to be updated is obtained from the service
    this.product = productService.toBeUpdated();
   }
  updateProduct() {
      this.productService.sync();
      this.router.navigate(['viewProducts']);
  }
  ngOnInit() {
  }

}
