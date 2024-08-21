import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FentyService } from './fenty.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forwardRef } from '@angular/core';

@Component({
  selector: 'app-fenty',
  templateUrl: './fenty.component.html',
  styleUrls: ['./fenty.component.css'],
   providers: [
    {provide: FentyComponent, useExisting: forwardRef(() => FentyComponent)}
  ]
})
export class FentyComponent implements OnInit{

  @Output() remove = new EventEmitter()
  @Output() buy = new EventEmitter()

  wiev: boolean = false;
  sneakers: any[] = [];
  keyword: string | number = '';

  constructor(
    private Fentyservice: FentyService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
    this.Fentyservice.getproducts().subscribe(data => {
      this.sneakers = data
      console.log('sneakers', this.sneakers)
    },
    error => {
      console.error('Error', error);
    })

    this.route.params.subscribe((params)=> {
      this.keyword = params ['filter']
    })
  }
}
