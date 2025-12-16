import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserLogin } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly CONTROLLER = environment.domain + '/Auth'

  constructor(private http: HttpClient) { }

  login(request: UserLogin){
    return this.http.post(this.CONTROLLER + '/Login', request);
  }

  verify(){
    return this.http.get(this.CONTROLLER + '/Verify');
  }

  logout(){
    return this.http.get(this.CONTROLLER + '/Logout');
  }
}
