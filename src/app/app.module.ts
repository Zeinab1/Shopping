import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CustomFormsModule} from 'ng2-validation';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { LoginComponent } from './login/login.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';


import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UsersService } from './services/users.service';
import { CategoriesService } from './services/categories.service';
import { ProductService } from './services/product.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { DataTablesModule } from 'angular-datatables';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrderComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DataTablesModule,
    CustomFormsModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
   TooltipModule.forRoot(),
   RouterModule.forRoot([
     {path:'',component:ProductsComponent},
     {path:'products',component:ProductsComponent},
     {path:'login',component:LoginComponent},

     {path:'shopping-cart',component:ShoppingCartComponent,canActivate:[AuthGuardService]},
     {path:'check-out',component:CheckOutComponent,canActivate:[AuthGuardService]},
     {path:'order-success',component:OrderSuccessComponent,canActivate:[AuthGuardService]},
     {path:'my-order',component:MyOrderComponent,canActivate:[AuthGuardService]},

     
     {path:'admin/order',component:AdminOrderComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},
     {path:'admin/products/new',component:ProductFormComponent,canActivate:[AuthGuardService]},
     {path:'admin/products/:id',component:ProductFormComponent,canActivate:[AuthGuardService]},
     {path:'admin/products',component:AdminProductsComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},


     
      ]),
   AngularFireModule.initializeApp(environment.firebase),
   AngularFireDatabaseModule,
   AngularFireAuthModule,
  
  ],
  providers: [
    AuthService,
    AuthGuardService,
    CategoriesService,
    ProductService,
    AdminAuthGuardService,
    UsersService,
    ShoppingCartService,
    
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
