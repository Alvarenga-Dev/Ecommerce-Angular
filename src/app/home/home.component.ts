import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private producsService: ProductsService) {
  }

  ngOnInit() {
    this.producsService
      .getProducts('http://localhost:3000/clothes', {
        page: 0,
        perPage: 5,
      })
      .subscribe((products: Products) => {
        console.log(products.items);
      });
  }
}
