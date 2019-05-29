import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomFormsModule } from 'ng2-validation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MaterialModule } from './material/material.module';
import { ModeComponent } from './navbar/mode/mode.component';
import { ProductsComponent } from './products/products.component';

import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { AdminProductItemComponent } from './admin/admin-product-item/admin-product-item.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { CategoryFilterComponent } from './products/category-filter/category-filter.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModeComponent,
    ProductsComponent,
    AdminProductsComponent,
    AdminProductItemComponent,
    CategoryFilterComponent,
    ProductCardComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    CustomFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
