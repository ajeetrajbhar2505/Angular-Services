import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  products: Product[] = []
  data = 10
  constructor() { }

  getProductDetails(): Product[] {
    this.products = [
      {
        productId: 1,
        productName: 'Mobile',
        productPrice: 10000,
        productDescription: 'iPhone 12 Mini',
        productImage: 'iphone.png',
      },
      {
        productId: 2,
        productName: 'Table Fan',
        productPrice: 2300,
        productDescription: 'Bajaj Esteem Table Fan 400 MM',
        productImage: 'table.jpg',
      },
      {
        productId: 3,
        productName: 'Air Conditioner',
        productPrice: 6888,
        productDescription: 'Haier 1.5 Ton 3 Star Clean Cool Triple Inverter Split Air Conditioner - HSU18C-TQB3BN-INV',
        productImage: 'ac.png',
      }
      ,
      {
        productId: 4,
        productName: 'Refrigerator',
        productPrice: 16900,
        productDescription: 'Whirlpool 192 Litre 3 Star Direct Cool Single Door Refrigerator, Wine Flower Rain',
        productImage: 'frige.jpeg',
      }
    ]
    return this.products
  }
}
