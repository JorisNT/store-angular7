import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';

import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product;
  productId: string;
  categories$: Observable<Category[]>;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.initProduct();
    this.initCategories();
  }

  async onSave(product: Product) {
    if (!this.productId) await this.productService.create(product).toPromise();
    else await this.productService.update(this.productId, product).toPromise();

    this.navigateToAdminMain();
  }

  async onDelete() {
    if (!this.productId) return alert('Error: No product found.');

    const ok = confirm(`Really want to delete ${this.product.name} product ?`);
    if (!ok) return;

    await this.productService.delete(this.product.id).toPromise();

    this.navigateToAdminMain();
  }

  private navigateToAdminMain() {
    this.router.navigate(['/admin/products']);
  }

  private initCategories() {
    this.categories$ = this.categoryService.getAll();
  }

  private initProduct() {
    this.product = new Product();

    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) this.productService.get(this.productId).subscribe(p => this.product = p);
  }

}
