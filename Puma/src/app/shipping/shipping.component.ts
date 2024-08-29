import { Component, Input, OnInit } from '@angular/core';
import { ShippingService } from './shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent{
  MyShipping: any[] = []
  @Input() ShippingSizes: [] = [];
  constructor(private shippingServ: ShippingService){}

  ngOnInit(){
    this.shippingServ.items$.subscribe(sizes =>{
      this.MyShipping = sizes
      if(this.shippingServ.retriveData('shipping').length > 0){
<<<<<<< Updated upstream
        this.MyShipping = this.shippingServ.retriveData('shipping')
        console.log('sneakers', this.MyShipping)
=======
       this.MyShipping = this.shippingServ.retriveData('shipping')
        console.log(this.MyShipping)
>>>>>>> Stashed changes
      }
    })
  }
}
 