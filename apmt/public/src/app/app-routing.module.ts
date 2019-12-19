import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginRegComponent},
  {path: 'home', component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
