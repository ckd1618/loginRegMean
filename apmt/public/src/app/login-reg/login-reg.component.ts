import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {
  newUser = {email: '', password: '', passwordConfirmation:''};
  user = {email: '', password: ''};
  message = '';
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }
  register(){
    var tempObservable = this._httpService.register(this.newUser);
    tempObservable.subscribe((data: any)=> {
      console.log('got data', data);
      if(!data.errmsg && !data.error){
        this._router.navigate(['/home']);
      }else {
        this.message = 'Validation failed or email already taken.';
      }
    })
  }

  login() {
    var tempObservable = this._httpService.loginUser(this.user);
    tempObservable.subscribe((data: any)=> {
      console.log('got data', data);
      if(!data.errmsg && !data.error){
        this._router.navigate(['/home']);
      }else {
        this.message = 'Invalid login info.';
      }
    })
  }

}
