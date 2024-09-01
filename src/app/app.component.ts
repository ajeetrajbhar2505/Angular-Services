import { Component } from '@angular/core';
import { WebService } from './services/web.service';
import { Product } from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  products: Product[] = []
  constructor(private WebService: WebService) { 
    this.products = this.WebService.getProductDetails()
    console.log(this.WebService.data);
    
  }
}
