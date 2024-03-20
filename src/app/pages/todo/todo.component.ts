import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../../utils/localstorage.service';
import { jwtDecode } from "jwt-decode";
import { TodoService } from '../../services/todo.service';
import { TodoDTO } from '../../models/Todo/TodoDTO';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  private id: string;
  public role: string;

  public todos: TodoDTO[] = [];

  constructor(private localstorageService: LocalstorageService, private todoService: TodoService){
    let decoded = Object.values(jwtDecode(this.localstorageService.getItem() || ''));
    this.id = decoded[0];
    this.role = decoded[1];
  }
  ngOnInit(): void {
    this.todoService.indexByUserId(this.id).subscribe(
      response => {
        this.todos = response.data;
      },
      error => {
        alert("ERROR")
    });
  }
}
