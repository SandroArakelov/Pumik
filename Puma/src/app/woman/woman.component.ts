import { Component } from '@angular/core';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css']
})
export class WomanComponent {
  item = [
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/398534/01/sv01/fnd/PNA/fmt/png/Palermo-Moda-Xtra-Sneakers-Women'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/398534/02/sv01/fnd/PNA/fmt/png/Palermo-Moda-Xtra-Sneakers-Women'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/399586/01/sv01/fnd/PNA/fmt/png/PUMA-x-COLLINA-STRADA-Velophasis-Yellow-Vintage-Women'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/399587/01/sv01/fnd/PNA/fmt/png/PUMA-x-COLLINA-STRADA-Suede-XL-Tie-Dye-Women'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/399028/02/sv01/fnd/PNA/fmt/png/Easy-Rider-Vintage-Sneakers'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/380068/08/sv01/fnd/PNA/fmt/png/STEWIE-x-TEAM-Stewie-3-Women'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/380068/07/sv01/fnd/PNA/fmt/png/STEWIE-x-TEAM-Stewie-3-Women'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/380068/09/sv01/fnd/PNA/fmt/png/STEWIE-x-TEAM-Stewie-3-Women'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/397643/21/sv01/fnd/PNA/fmt/png/Palermo-Women'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/377839/03/sv01/fnd/PNA/fmt/png/SEASONS-Voyage-NITRO%E2%84%A2-3-GORE-TEX-Women'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/108183/01/sv01/fnd/PNA/fmt/png/FUTURE-7-MATCH-BRILLIANCE-Firm-Ground/Artificial-Ground-Women'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/378965/01/sv01/fnd/PNA/fmt/png/evoSPEED-NITRO%E2%84%A2-Long-Jump-2-Track-&amp;-Field-Shoes'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/310115/01/sv01/fnd/PNA/fmt/png/ForeverRun-NITRO%E2%84%A2-Women'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/310114/01/sv01/fnd/PNA/fmt/png/Deviate-NITRO%E2%84%A2-3-Women'},
    {src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/108178/01/sv01/fnd/PNA/fmt/png/ULTRA-5-ULTIMATE-BRILLIANCE-Firm-Ground-Women'},
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
