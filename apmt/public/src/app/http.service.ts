import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  register(userObj){
    return this._http.post('/api/users', userObj);
  }
  loginUser(userObj){
    return this._http.post('/api/login', userObj);
  }
  getCurrentUser() {
    return this._http.get('/api/current_user');
  }
}
