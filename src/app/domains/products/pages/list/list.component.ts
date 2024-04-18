import { Component, Input, SimpleChanges, importProvidersFrom, inject, input, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component'
import { Product } from '@shared/models/product.model';

import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {

  products = signal<Product[]>([])
  categories = signal<Category[]>([])
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);


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

  @Input() category_id?: string;

  ngOnInit(){
   this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges){    
    this.getProducts()
  }
  addToCard(product: Product){
    this.cartService.addToCart(product)
  } 

  private getProducts(){
    this.productService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {}
    })
  }

  private getCategories(){
    this.categoryService.getAll().subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: () => {}
    })
  }

} 

