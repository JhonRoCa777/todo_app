import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ResponseDTO } from '../models/Response/ResponseDTO';

import { LocalstorageService } from '../utils/localstorage.service';
import { TodoDTO } from '../models/Todo/TodoDTO';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  readonly todo_api = environment.domain + '/Todos'

  constructor(private http: HttpClient,private localstorageService: LocalstorageService) { }

  indexByUserId(userid: string){
    return this.http.get<ResponseDTO<TodoDTO[]>>(this.todo_api + '/' + userid, {
      headers: {'Authorization':'Bearer ' + this.localstorageService.getItem()}
   });
  }
}
