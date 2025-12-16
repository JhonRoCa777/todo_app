import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';
import { Subscription } from 'rxjs';
import { TodoArrayStore } from '../../store/todo-array.store';
import { TodoRequestStore } from '../../store/todo-request.store';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit, OnDestroy {

  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);
  private todoService = inject(TodoService);
  private todoArrayStore = inject(TodoArrayStore);
  private todoRequestStore = inject(TodoRequestStore);
  public todos: Todo[] = [];
  private subscription: Subscription | undefined;

  ngOnInit(): void {
    this.subscription = this.todoArrayStore.todos$.subscribe(
      r => this.todos = r
    );

    this.todoService.index().subscribe(r => this.todoArrayStore.set(r));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  edit(todo: Todo){
    this.todoRequestStore.set({...todo});
  }

  confirmDelete(id: number){
    this.confirmationService.confirm({
      message: '¿Está seguro de eliminar este registro?',
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',

      accept: () => this.delete(id)
    });
  }

  private delete(id: number){
    this.todoService.delete(id).subscribe(
      _ => {
        this.messageService.add({severity: 'success', summary: 'Exito', detail: 'Todo Eliminado', life: 5000 });
        this.todoService.index().subscribe(r => this.todoArrayStore.set(r))
      }
    );
  }
}
