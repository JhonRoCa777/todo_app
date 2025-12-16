import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Todo, TodoGroup, TodoRequest } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  readonly CONTROLLER = environment.domain + '/Todo'

  constructor(private http: HttpClient) { }

  index(){
    return this.http.get<Todo[]>(this.CONTROLLER);
  }

  getGroup(){
    return this.http.get<TodoGroup[]>(`${this.CONTROLLER}/GetGroup`);
  }

  create(request: TodoRequest){
    return this.http.post(this.CONTROLLER, request);
  }

  update(request: TodoRequest, id: number){
    return this.http.put(`${this.CONTROLLER}/${id}`, request);
  }

  delete(id: number){
    return this.http.delete(`${this.CONTROLLER}/${id}`);
  }
}
