import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import {Router} from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private productService: ProductsService,
    private router: Router) {
    
  }

  ngOnInit() {
  }
edit(p: Product) {
this.productService.markForUpdation(p);
// route is changed to editProduct
this.router.navigate(['editProduct']);
}
remove(p: Product) {
  this.productService.removeProduct(p);

}
}
