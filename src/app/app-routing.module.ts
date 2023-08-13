import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';
import { ProductscomponentComponent } from './productscomponent/productscomponent.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

const routes: Routes = [
  {path:'', component: UsercomponentComponent},
  {path:'Products',component: ProductscomponentComponent},
  {path:'ProductsInfo/:id',component: ProductInfoComponent},
  // {path:'header',component: HeaderComponent},
  // {path:'footer',component: FooterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
