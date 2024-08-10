import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsComponent } from './components/home/reviews/reviews.component';
import { ContactUsComponent } from './components/home/contact-us/contact-us.component';
import { ProductsComponent } from './components/home/products/products.component';
import { VisitUsComponent } from './components/home/visit-us/visit-us.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent

  },
  {
    path:"Home/contact-us",
    component:ContactUsComponent
  },
  {
    path:"cart",
    component:CartComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
