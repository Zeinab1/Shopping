import { Component, OnDestroy, OnInit} from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap'
import { CategoriesService } from '../services/categories.service';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnDestroy , OnInit  {
products:Product[];
filtredProducts:Product[];
category:string;
cart:any;
subscription:Subscription


  constructor(
     productService:ProductService,
    private shoppingCartService:ShoppingCartService,
     route:ActivatedRoute) { 
     
 this.subscription=productService
 .getAll()
 .subscribe(products=> {  
    this.products = products;
     route.queryParamMap.subscribe(params=>{

  this.category = params.get('categories');

  this.filtredProducts = (this.category)?

  this.products.filter(p=> p.category===this.category):
  this.products;
  });
});
}
 async ngOnInit(){
  this.subscription=  ( await this.shoppingCartService.getCart() )
  .subscribe(cart=> this.cart=cart)
 }
    ngOnDestroy(){
      this.subscription.unsubscribe();
    }
}
