import { Component, OnInit } from '@angular/core';
import { ShippingService } from '../shipping/shipping.service';
import { ShippingVal } from '../shipping/shipping';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

MyCart: any[] = []
total: number = 0;
tax: number = 0;
constructor(private ShippingServ: ShippingService){}

ngOnInit(){
  this.ShippingServ.items$.subscribe(Data => {
    this.MyCart = Data
    if(this.ShippingServ.retriveData('shipping').length > 0){
      this.MyCart = this.ShippingServ.retriveData('shipping')
      this.sum()
      this.MyCart.forEach((e)=>{
        this.total += e.base_price
      })
    }
  })
}

sum(){
  this.total = this.total + this.tax
}


remove(product: any){
  const index = this.MyCart.findIndex(item => item.id = product.id);
  if(index !== -1){
    this.MyCart.splice(index, 1)
    localStorage.setItem('shipping', JSON.stringify(this.MyCart))
  }
  this.total -= product.base_price
}

}
