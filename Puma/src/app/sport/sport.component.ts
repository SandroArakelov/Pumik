import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FentyService } from '../fenty/fenty.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forwardRef } from '@angular/core';
import { ShippingService } from '../shipping/shipping.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css'],
  providers: [
    {provide: SportComponent, useExisting: forwardRef(() => SportComponent)}
  ]
})
export class SportComponent implements OnInit {
  @Output() remove = new EventEmitter()
  @Output() buy = new EventEmitter()
  wiev: boolean = false;
  ColabProducts: any[] = [];
  keyword: string | number = '';


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

  AddSize(product: any){
    this.ShippingSevice.AddShipping(product)
  }
}
