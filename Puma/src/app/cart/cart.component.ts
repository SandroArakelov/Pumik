import { Component } from '@angular/core';
import { ShippingService } from '../shipping/shipping.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
MyCart: any[] = []

constructor(private ShippingServ: ShippingService){}

ngOnInit(){
  this.ShippingServ.items$.subscribe(Data => {
    this.MyCart = Data
    if(this.ShippingServ.retriveData('shipping').length > 0){
      Data = this.ShippingServ.retriveData('shipping')
      console.log("cart", Data)
    }
  })
}
}
