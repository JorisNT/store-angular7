import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product';
import { api } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = `${api.url}/products`;
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.endpoint, product);
  }

  update(productId: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.endpoint}/${productId}`, product);
  }

  get(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.endpoint}/${productId}`);
  }

  delete(productId: string): Observable<Product> {
    return this.http.delete<Product>(`${this.endpoint}/${productId}`);
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpoint);
  }
}
