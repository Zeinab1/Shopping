import { shoppingCartitem } from './shopping-cart-item';

export class shoppingCart{
    
    constructor(public Items:shoppingCartitem[]){}
//property
   get getTotalItemCount(){
    let count = 0;
    for(let productId in this.Items) 
    count += this.Items[productId].quantity;
    return count;
    }
}