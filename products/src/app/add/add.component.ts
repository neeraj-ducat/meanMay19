import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  // object to receive form data
  product: Product;
  constructor(private productService:ProductsService,
    private alertService: AlertService
    ) 
  {
    this.product = new Product();
  }
  // Method to add product
  addProduct() {
    // copy of the product object is created.
    let newProduct = Object.assign({},this.product);
    // copy is added to the service array
    this.productService.addProduct(newProduct);
    this.alertService.success('Successfully added.');
  }
  ngOnInit() {
  }

}
