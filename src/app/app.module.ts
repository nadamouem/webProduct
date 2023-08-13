import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';
import { ProductscomponentComponent } from './productscomponent/productscomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductInfoComponent } from './product-info/product-info.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsercomponentComponent,
    ProductscomponentComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
