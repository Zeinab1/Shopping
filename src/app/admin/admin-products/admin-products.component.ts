import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from 'src/app/models/product';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy,AfterViewInit {
  product:Product[];
  filteredProduct:Product[];
  subsrcibe:Subscription;
//what we need to use angular data table
  dtOptions: DataTables.Settings = {};
   // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject <any>= new Subject();
  constructor(private productService:ProductService) { 
    this.subsrcibe= this.productService.getAll().
     subscribe(product=> {
      this.filteredProduct= this.product=product;
      });
  }
  filter(query:string){
    if(query){
      this.filteredProduct=
     this.product.filter(
      p=> p.title.toLowerCase().includes(query.toLowerCase()));
    }
    else{
      this.filteredProduct=this.product;
    }
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    }
    ngAfterViewInit(): void {
      this.dtTrigger.next();
}

 ngOnDestroy(): void{
    this.subsrcibe.unsubscribe();
 }

}
