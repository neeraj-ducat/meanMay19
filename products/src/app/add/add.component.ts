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
    this.productService.products.push(this.product);
    this.alertService.success('Successfully added.');
  }
  ngOnInit() {
  }

}
