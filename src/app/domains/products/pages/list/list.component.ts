import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component'
import { Product } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([])
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  /* constructor(){
    const initProducts: Product[] = [
      
      {
      id: Date.now(),
      title: 'Camisa',
      price: 5,
      image: 'https://picsum.photos/320/320?r=2',
      creationAt: new Date().toISOString()
      },
      {
      id: Date.now(),
      title: 'Pantalón',
      price: 6,
      image: 'https://picsum.photos/320/320?r=3',
      creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Medias',
        price: 2,
        image: 'https://picsum.photos/320/320?r=4',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Zapatos',
        price: 10,
        image: 'https://picsum.photos/320/320?r=5',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Camisa',
        price: 5,
        image: 'https://picsum.photos/320/320?r=2',
        creationAt: new Date().toISOString()
        },
        {
        id: Date.now(),
        title: 'Pantalón',
        price: 6,
        image: 'https://picsum.photos/320/320?r=3',
        creationAt: new Date().toISOString()
        },
        {
          id: Date.now(),
          title: 'Medias',
          price: 2,
          image: 'https://picsum.photos/320/320?r=4',
          creationAt: new Date().toISOString()
        },
        {
          id: Date.now(),
          title: 'Zapatos',
          price: 10,
          image: 'https://picsum.photos/320/320?r=5',
          creationAt: new Date().toISOString()
        }
    ];
    this.products.set(initProducts);
  }
  */

  ngOnInit(){
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {}
    })
  }

  addToCard(product: Product){
    this.cartService.addToCart(product)
  } 
} 
