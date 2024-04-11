import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RequiredValidator } from '@angular/forms';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  /*@Input({required: true}) img: string = '';
  @Input({required: true}) price: number = 0;
  @Input({required: true}) title: string = '';
  */
  @Input({required: true}) product!: Product;


  @Output() addToCart = new EventEmitter();
  addToCartHandler(){
    this.addToCart.emit('this.product')
  }
}
