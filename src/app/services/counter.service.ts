import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {


  private counters: { [key: string]: BehaviorSubject<number> } = {};

  constructor() {}

  //get counter to display in each product
  getCounter(productId: string): BehaviorSubject<number> {
    if (!this.counters[productId]) {
      this.counters[productId] = new BehaviorSubject<number>(0);
    }
    return this.counters[productId];
  }

  //to increase number of quantity to select product
  increase(productId: string): void {
    console.log('Increasing counter for product ID:', productId);
    const counter = this.getCounter(productId);
    counter.next(counter.value + 1);
  }
//to decrease number of quantity to select product
  decrease(productId: string): void {
    console.log('Decreasing counter for product ID:', productId);
    const counter = this.getCounter(productId);
    const newValue = Math.max(0, counter.value - 1); // Ensure the counter doesn't go below 0
    counter.next(newValue);}



  //get total of quantity of all items added in cart
  private totalQuantity = new BehaviorSubject<number>(0);
  getTotal = this.totalQuantity.asObservable();

  getTotalQuantity(){
   return this.getTotal;
  }
  updateTotalQuantity(total:number){
    this.totalQuantity.next(total);
  }
}

