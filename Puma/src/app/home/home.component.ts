import { Component } from '@angular/core';
import { RegService } from './reg.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // visible = false
  // constructor(private MyReg : RegService) {}

  // ngOnInit(){
  //   this.MyReg.div$.subscribe(item => {
  //     this.visible = item
  //   })
  // }

  // onclick(){
  //   this.visible = !this.visible
  // }


  items = [
    {src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/401709/01/sv01/fnd/PNA/fmt/png/PLAY-LOUD-Suede-XL-Sneakers"},
    {src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/400744/02/sv01/fnd/PNA/fmt/png/PLAY-LOUD-Suede-Sneakers"},
    {src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/401083/01/sv01/fnd/PNA/fmt/png/PLAY-LOUD-GV-Special-Sneakers"},
    {src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/401088/01/sv01/fnd/PNA/fmt/png/PLAY-LOUD-Palermo-Sneakers"},
    {src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/398190/02/sv01/fnd/PNA/fmt/png/PLAY-LOUD-Suede-Sneakers"}
  ];
  currentSlide = 0;
  visibleSlides = 4;

  next() {
    if (this.currentSlide + this.visibleSlides < this.items.length) {
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
