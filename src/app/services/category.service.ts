import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { api } from '../utils/api';
import { Category } from '../models/category';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = `${api.url}/categories`;
  }

  getAll(): Observable<Category[]> {
    return this.http
      .get<Category[]>(this.endpoint)
      .pipe(map(categories => this.sort(categories)));
  }

  private sort(categories: Category[]): Category[] {
    return categories.sort((a, b) => a.name.localeCompare(b.name));
  }
}
