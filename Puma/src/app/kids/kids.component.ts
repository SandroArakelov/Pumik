import { Component } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {

  item = [
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/399371/07/sv01/fnd/PNA/fmt/png/Easy-Rider-Vintage-Big-Kids'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/399709/07/sv01/fnd/PNA/fmt/png/Easy-Rider-Vintage-Toddlers'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/399371/02/sv01/fnd/PNA/fmt/png/Easy-Rider-Vintage-Big-Kids'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/399709/02/sv01/fnd/PNA/fmt/png/Easy-Rider-Vintage-Toddlers'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/399718/02/sv01/fnd/PNA/fmt/png/Easy-Rider-Toddlers'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/399718/03/sv01/fnd/PNA/fmt/png/Easy-Rider-Toddlers'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/397276/04/sv01/fnd/PNA/fmt/png/Palermo-Leather-Little-Kids'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/398816/01/sv01/fnd/PNA/fmt/png/PUMA-x-TROLLS-Suede-Classics-Little-Kids'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/398894/01/sv01/fnd/PNA/fmt/png/PUMA-x-TROLLS-RS-X-Little-Kids'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/398943/01/sv01/fnd/PNA/fmt/png/PUMA-x-TROLLS-Mayze-Crashed-Little-Kids'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/398830/01/sv01/fnd/PNA/fmt/png/PUMA-x-TROLLS-CA-Pro-Little-Kids'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/627385/26/mod01/fnd/PNA/fmt/png/PUMA-x-TROLLS-Little-Kids'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/627385/69/mod01/fnd/PNA/fmt/png/PUMA-x-TROLLS-Little-Kids'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/627387/49/mod01/fnd/PNA/fmt/png/PUMA-x-TROLLS-Little-Kids'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/627387/69/mod01/fnd/PNA/fmt/png/PUMA-x-TROLLS-Little-Kids'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/627384/26/mod01/fnd/PNA/fmt/png/PUMA-x-TROLLS-Little-Kids'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/627384/69/mod01/fnd/PNA/fmt/png/PUMA-x-TROLLS-Little-Kids'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/627383/69/mod01/fnd/PNA/fmt/png/PUMA-x-TROLLS-Little-Kids'},
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
