import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product:Product;
  @Input('show-actions') showActions=true;
  @Input('shopping-cart') shoppingCart;

  constructor(private shoppingCartService:ShoppingCartService) { }
  addToCart(){
  this.shoppingCartService.addToCart(this.product);
  }
  removeFromCart(){
    this.shoppingCartService.removeFromCart(this.product);
  }

  getQuantity(){
    if(!this.shoppingCart) return 0;
   let item = this.shoppingCart.Items[this.product.$key];
   return item ? item.quantity : 0;
    
  }

  ngOnInit() {
  }

}
