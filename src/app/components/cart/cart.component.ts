import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: any[] = [];
  quantities: { [key: string]: number } = {};

constructor(private cartService:CartService ,
  private CounterService:CounterService ,
  private counterService:CounterService
  ){}


ngOnInit(): void {
  this.cartService.getCartItems().subscribe((items: any[]) => {
    this.cartItems = items;
  });
  this.cartItems.forEach(item => {
    this.getQuantity(item.id); // Call this for each item to populate quantities
  });

}

getQuantity(productId: string) {
  this.CounterService.getCounter(productId).subscribe((count: number) => {
    this.quantities[productId] = count;
    this.getTotal();
  });
}
removeFromCart(item:any){
  this.cartService.removeFromCart(item);
}

getTotal(){
const total = Object.values(this.quantities).reduce((total, quantity)=>total+quantity , 0);
  this.CounterService.updateTotalQuantity(total)

}

calculateTotalAmount(): number{
let total = 0;
this.cartItems.forEach(item=>{
const quantity = this.quantities[item.id] ;
total += item.price * quantity
});
return total
}
}



