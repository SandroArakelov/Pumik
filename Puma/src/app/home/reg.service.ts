import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegService {
  constructor() { }

  // private ShowDiv = new BehaviorSubject<boolean>(false);
  // div$ = this.ShowDiv.asObservable();

  // Toggle(){
  //   this.ShowDiv.next(!this.ShowDiv.value);
  // }
}
