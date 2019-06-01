import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import 'rxjs/add/operator/map';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private db:AngularFireDatabase
    
    ) { }
 
  /* Method to save new product in firebase*/
  create(product){
    return this.db.list('/product').push(product);
  }
  /* */
  getAll(){
   return this.db.list('/product');
  
  }
  /*method to get one product and show data from firebase to prduct/admin/id */
  get(productId:string){
    return this.db.object('/product/'+ productId);
  }
  
  update(productId:string, product){
      return this.db.object('/product/'+productId).update(product);
  }
  delete(productId){
    return this.db.object('/product/'+productId).remove();
  }
}
