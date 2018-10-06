import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCard } from '@angular/material';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListOfProductsComponent } from './components/list-of-products/list-of-products.component';
import { ListOfPromotedProductsComponent } from './components/list-of-promoted-products/list-of-promoted-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ListOfProductsComponent,
    ListOfPromotedProductsComponent,
    MatCard
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
