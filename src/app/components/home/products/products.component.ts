import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CounterService } from 'src/app/services/counter.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: any[] = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private counterService: CounterService
  ) {}

  ngOnInit() {
    this.productsService.getProductsList().subscribe(
      (data: any) => {
        this.products = data.data; // Assuming data is already an array of products
        this.initializeCounters();
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

  getCounter(productId: number): Observable<number> {
    return this.counterService.getCounter(productId.toString()).asObservable();
  }

  decrease(product: any): void {
    this.counterService.decrease(product.id.toString());
  }

  increase(product: any): void {
    this.counterService.increase(product.id.toString());
  }

  private initializeCounters(): void {
    // Initialize counters for each product
    this.products.forEach(product => {
      this.counterService.getCounter(product.id.toString());
    });
  }


}
