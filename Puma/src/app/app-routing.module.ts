import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WomanComponent } from './woman/woman.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'woman', component: WomanComponent},
  {path: 'account', component: AccountComponent},
  {path: ' ', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
