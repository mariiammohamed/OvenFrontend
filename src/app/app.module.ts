import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/includes/footer/footer.component';
import { NavigationComponent } from './components/includes/navigation/navigation.component';
import { HeaderComponent } from './components/home/header/header.component';
import { ProductsComponent } from './components/home/products/products.component';
import { VisitUsComponent } from './components/home/visit-us/visit-us.component';
import { ReviewsComponent } from './components/home/reviews/reviews.component';
import { ContactUsComponent } from './components/home/contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { EgpFormatPipe } from './pipe/egp-format.pipe';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HeaderComponent,
    ProductsComponent,
    VisitUsComponent,
    ReviewsComponent,
    ContactUsComponent,
    EgpFormatPipe,
    CartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
