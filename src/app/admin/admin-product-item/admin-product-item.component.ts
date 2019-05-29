import { Component, Input } from '@angular/core';

import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-product-item',
  templateUrl: './admin-product-item.component.html',
  styleUrls: ['./admin-product-item.component.css']
})
export class AdminProductItemComponent {
  @Input() product: Product;

  constructor() { }
}
