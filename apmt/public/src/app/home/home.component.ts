import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser = {email: ''};
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    var tempObservable = this._httpService.getCurrentUser();
    tempObservable.subscribe((data: any)=>{
      console.log('got a response', data);
      if (data.error == 'You are not authorized!!!!') {
        this._router.navigate(['/']);
      }else{
        this.currentUser = data;
      }
    })
  }

}
