import { Component } from '@angular/core';
import { ShippingService } from '../shipping/shipping.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
MyCart: any[] = []
see = false

constructor(private ShippingServ: ShippingService){}

ngOnInit(){
  this.ShippingServ.items$.subscribe(Data => {
    this.MyCart = Data
    if(this.ShippingServ.retriveData('shipping').length > 0){
      Data = this.ShippingServ.retriveData('shipping')
      console.log("shipping", Data)
    }
  })
}

remove(product: any){
  const index = this.MyCart.findIndex(item => item.id = product.id);
  if(index !== -1){
    this.MyCart.splice(index, 1)
    localStorage.setItem('shipping', JSON.stringify(this.MyCart))
  }
}

}
