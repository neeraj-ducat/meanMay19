import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  // array of products
  products: Product[];
    
  constructor() { 
    this.products = Array();
    }
}
