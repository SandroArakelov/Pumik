import { Component } from '@angular/core';
import { FentyService } from '../fenty/fenty.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forwardRef } from '@angular/core';
import { ShippingService } from '../shipping/shipping.service';
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
  providers: [
    {provide: SaleComponent, useExisting: forwardRef(() => SaleComponent)}
  ]
})

export class SaleComponent{
  keyword: string | number = '';
  ColabProducts: any[] = [];
  wiev: boolean = false;

  constructor(
    private ShippingSevice: ShippingService,
    private Fentyservice: FentyService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
    this.Fentyservice.GetProductsUrl_1().subscribe(data => {
      this.ColabProducts = data
    },
    error => {
      console.error('Error', error);
    })
    this.route.params.subscribe((params)=> {
      this.keyword = params ['filter']
    })

    if((this.router.url).includes('shipping')){
      this.wiev = true
    }
  }

  AddToCart(product: any){
    this.ShippingSevice.AddShipping(product)
  }
}
