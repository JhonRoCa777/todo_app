import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCredentialsDTO } from '../models/User/UserCredentialsDTO';
import { environment } from '../../environments/environment';
import { ResponseDTO } from '../models/Response/ResponseDTO';
import { UserRegisterDTO } from '../models/User/UserRegisterDTO';
import { UserDTO } from '../models/User/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly user_api = environment.domain + '/Users'

  constructor(private http: HttpClient) { }

  login(credentials: UserCredentialsDTO){
    return this.http.post<ResponseDTO<string>>(this.user_api + '/login', credentials);
  }

  register(register: UserRegisterDTO){
    return this.http.post<ResponseDTO<UserDTO>>(this.user_api, register);
  }
}
