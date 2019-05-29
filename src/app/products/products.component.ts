import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { Product } from '../models/product';
import { Category } from '../models/category';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  category: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.initOrchestration();
  }

  private initOrchestration() {
    this.productService
      .getAll()
      .pipe(switchMap(products => {
        this.products = products;

        return this.route.queryParamMap;
      }))
      .subscribe(params => {
        this.category = params.get('category');

        this.updateFilteredProducts();
      })
  }

  private updateFilteredProducts() {
    this.filteredProducts = this.category
      ? this.products.filter(p => p.categoryId === this.category)
      : [...this.products];
  }
}
