import { Injectable } from '@angular/core';
import { ShippingVal } from './shipping';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  shipping: ShippingVal[] = [];
  cart: ShippingVal[] = [];

  private items = new BehaviorSubject<any[]>(this.retriveData('shipping') || [])
  items$ = this.items.asObservable();

  AddShipping(product: ShippingVal){
    if(this.shipping.length !== 1){
    const currentitems = this.items.value;
    this.items.next([currentitems, product])
    this.shipping.push(product)
    localStorage.setItem('shipping', JSON.stringify(this.shipping))
    this.shipping.shift()
    }
}

addcart(products: ShippingVal){
  const currentitems = this.items.value;
  this.items.next([...currentitems, products])
  this.cart.push(products)
  localStorage.setItem('shipping', JSON.stringify(this.cart))
  }

  retriveData(key: string):any{
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : []
  }
}