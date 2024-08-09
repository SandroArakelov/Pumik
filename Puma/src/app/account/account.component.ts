import { Component } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  Logvisible = true
  Regvisible = false

  RegClick(){
    this.Logvisible = !this.Logvisible
    this.Regvisible = !this.Regvisible
  }

  LogClick(){
    this.Regvisible = !this.Regvisible
    this.Logvisible = !this.Logvisible
  }
}
