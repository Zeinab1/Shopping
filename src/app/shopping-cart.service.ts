import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import {Product} from './models/product';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { shoppingCart } from './models/shopping-cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
 

  constructor(private db:AngularFireDatabase) { }
  create(){
   return this.db.list('/Shopping-Cart').push({
      dateCreated : new Date().getTime()
    });
  }
  
 public async getOrCreateCart (): Promise<string>{

    let cartId = localStorage.getItem('cartId');
    if(cartId) return  cartId;

     let result= await this.create();
     localStorage.setItem('cartId',result.key);
     return result.key;    
    }


  async getCart() : Promise<Observable<shoppingCart>>{
   let cartId = await this.getOrCreateCart();
    return this.db.object('/Shopping-Cart/'+ cartId)
    .map(x=> new shoppingCart( x.Items) );
  }
  // method to get item 
private getItem(cartId:string,productId:string){
  return this.db.object('/Shopping-Cart/'+cartId+'/Items/'+productId);
}

// we found that add and remove method hve the same code except (- and +) so we need method to be elegent code

   private async updateItemQuantity(product:Product,change:number){
        let cartId= await this.getOrCreateCart();
        let item$= this.getItem(cartId,product.$key);
        item$.take(1).subscribe(item=>{
        item$.update({product:product,quantity:(item.quantity || 0) + change});
     });


}
   async addToCart(product:Product){
    this.updateItemQuantity(product,1);
  }
  
 async removeFromCart(product:Product){
    this.updateItemQuantity(product,-1);
  }
}
