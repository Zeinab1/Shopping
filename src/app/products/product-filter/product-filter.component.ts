import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  category$;
@Input('category') category;

  constructor( categoryService:CategoriesService) { 
    this.category$ =categoryService.getCategories();
  }

  ngOnInit() {
  }

}
