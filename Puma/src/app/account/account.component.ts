import { Component } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  Logvisible = false
  Regvisible = true
  RegError = false
  // regusers: any[] = []
  // regValid: any = {
  //   email: '',
  //   password: ''
  // }

  // register(){
  //   if(this.regValid.email.includes('@') && this.regValid.password > 8){
  //     this.regusers.push(this.regValid)
  //     localStorage.setItem('RegistrationUser', JSON.stringify(this.regusers))
  //     this.regValid = {
  //       FirstName: '',
  //       LastName: '',
  //       email: '',
  //       password: ''
  //     }
  //     this.Regvisible = !this.Regvisible
  //     this.Logvisible = !this.Logvisible
  //   }
  //   else{
  //     this.RegError = !this.RegError
  //     console.log('error')
  //   }
  // }

  RegClick(){
    this.Logvisible = !this.Logvisible
    this.Regvisible = !this.Regvisible
  }

  LogClick(){
    this.Regvisible = !this.Regvisible
    this.Logvisible = !this.Logvisible
  }


}
