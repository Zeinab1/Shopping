import { Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs';
import { shoppingCart } from '../models/shopping-cart';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit  {
appUser:AppUser;
shoppingCartItemCount : number;
cart$:Observable<shoppingCart>;
  constructor(private authService:AuthService ,private shoppingCartService:ShoppingCartService) {
   
   
   }
  async ngOnInit(){
    this.authService.APPUser$.subscribe((appUser : any)=> this.appUser=appUser);
     this.cart$ = await this.shoppingCartService.getCart();
   }

 logout(){
  this.authService.logout()
 }


}
