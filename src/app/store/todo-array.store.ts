import { Injectable, signal } from "@angular/core";
import { Estado } from "../models/enums/Estado";
import { Todo, TodoRequest } from "../models/Todo";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TodoArrayStore {

  private _todos = new BehaviorSubject<Todo[]>([]);
  get todos$() {
    return this._todos.asObservable();
  }

  set(todos: Todo[]) {
    this._todos.next(todos);
  }
}
