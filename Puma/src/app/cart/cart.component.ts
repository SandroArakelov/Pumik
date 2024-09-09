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

item = [
  {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/399028/02/sv01/fnd/PNA/fmt/png/Easy-Rider-Vintage-Sneakers'},
  {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/399028/08/sv01/fnd/PNA/fmt/png/Easy-Rider-Vintage-Sneakers'},
  {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/311070/01/sv01/fnd/PNA/fmt/png/Scoot-Zeros-Retro-Portland-Men'},
  {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/310387/01/sv01/fnd/PNA/fmt/png/All-Pro-NITRO%E2%84%A2-Crowd-Craze-Men'},
  {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/108072/01/sv01/fnd/PNA/fmt/png/FUTURE-7-ULTIMATE-VOLUME-UP-Firm-Ground/Artificial-Ground-Men'},
  {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/108069/01/sv01/fnd/PNA/fmt/png/KING-ULTIMATE-VOLUME-UP-Firm-Ground/Artificial-Ground-Men'},
  {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/108063/01/sv01/fnd/PNA/fmt/png/ULTRA-5-ULTIMATE-VOLUME-UP-Firm-Ground-Men'},
  {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/399477/01/sv01/fnd/PNA/fmt/png/Suede-USAIN-BOLT-Sneakers'},
  {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/396464/14/sv01/fnd/PNA/fmt/png/Palermo-Leather-Sneakers'},
  {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/377838/04/sv01/fnd/PNA/fmt/png/SEASONS-Voyage-NITRO%E2%84%A2-3-GORE-TEX%C2%AE-Men'},
  {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/630264/01/mod01/fnd/PNA/fmt/png/F1%C2%AE-ESS+-Men'},
  {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/630264/02/mod01/fnd/PNA/fmt/png/F1%C2%AE-ESS+-Men'},
  {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/310901/01/sv01/fnd/PNA/fmt/png/Scoot-Zeros-O.D.D-City-Men'},
  {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/629215/01/mod01/fnd/PNA/fmt/png/Scoot-All-Jaws-All-Over-Print-Men'},
  {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/629212/01/mod01/fnd/PNA/fmt/png/Scoot-Trail-Blazing-Men'},
  {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/629214/01/mod01/fnd/PNA/fmt/png/Scoot-Trail-Blazing-Men'}
]

currentSlide = 0;
visibleSlides = 4;

next() {
  if (this.currentSlide + this.visibleSlides < this.item.length) {
    this.currentSlide++;
  }
}

prev() {
  if (this.currentSlide > 0) {
    this.currentSlide--;
  }
}

goToSlide(index: number) {
  this.currentSlide = index;
}
}
