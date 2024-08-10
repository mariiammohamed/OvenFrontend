// that we can use  this class in the dependency injection means that
// any class in the application can request instance of this service
import { Injectable } from '@angular/core';


import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  //tells the angular in this application can be injected , root means can used throught the application
  providedIn: 'root',
})
export class CartService {
 constructor() { }

  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(product: any): void {
    const currentItems = this.cartItemsSubject.value;

    // Check if the item already exists in the cart
    const itemExists = currentItems.find(item => item.id === product.id);

    if (!itemExists) {
      const updatedItems = [...currentItems, product];
      this.cartItemsSubject.next(updatedItems);
    } else {
      // Optionally, you can update the quantity or notify the user that the item is already in the cart
      console.log('Item already in cart');
    }
  }

  getCartItems(): Observable<any[]> {
    return this.cartItems$;
  }

  removeFromCart(item:any):void{
    const currentItems = this.cartItemsSubject.value;
    //filter return new array with items not equal to item need to be removed
    const updatedItems = currentItems.filter(cartItem => cartItem !== item);
    this.cartItemsSubject.next(updatedItems)
  }


}

