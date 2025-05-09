import { Component, Input, OnInit } from '@angular/core';
import { ShippingService } from './shipping.service';
import { style } from '@angular/animations';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent{
  MyShipping: any[] = []
  @Input() ShippingSizes: [] = [];
  addInCart: boolean = false
  // value: number = 1;
  // visible = {
  //   background-color: black;
  //   color: white;
  // };

  constructor(private shippingServ: ShippingService){}

  ngOnInit(){
    this.shippingServ.items$.subscribe(sizes =>{
      this.MyShipping = sizes
      if(this.shippingServ.retriveData('shipping').length > 0){
        this.MyShipping = this.shippingServ.retriveData('shipping')
        console.log('sneakers', this.MyShipping)
      }
    })
  }

  addToCart(products: any){
    this.shippingServ.addcart(products)
  }

  //dublemoney(){
    // if(this.value = this.value){
    //   this.value * 
    // }
  //}

  // onclick(){
  //   this.visible = !this.visible
  // }

}
 