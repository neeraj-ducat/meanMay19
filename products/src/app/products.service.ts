import { Injectable } from '@angular/core';
import { Product } from './product';
import {LocalStorageService} from 'ngx-webstorage';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  // index of the product to be updated
  updateIndex: number;
  // array of products
  products: Product[];
    
  constructor(private localStorage: LocalStorageService) { 
    // reterieve the products from the local storage
    this.products = localStorage.retrieve('products');
    if( this.products == null ) // If not found.
      this.products = Array(); // Empy array is created.
    }
  toBeUpdated()
  {
    return this.products[this.updateIndex];
  }
  markForUpdation(p: Product) {
    this.updateIndex = this.products.indexOf(p);
  }  
  addProduct(p: Product) {
    // prouct is pushed in the array
    this.products.push(p);
    this.sync();
  }
  removeProduct(p: Product) {
    // Index of the product in array is obtained
    let index = this.products.indexOf(p);
    // prouct is removed from the array
    this.products.splice(index,1);
    this.sync();
   }
  sync() {
  // products array is saved in the local storage
  this.localStorage.store('products',this.products);
  
  }
}
