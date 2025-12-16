import { Component, inject } from '@angular/core';
import { TodoRequestStore } from '../../../../store/todo-request.store';
import { Estado } from '../../../../models/enums/Estado';
import { TodoService } from '../../../../services/todo.service';
import { TodoArrayStore } from '../../../../store/todo-array.store';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrl: './todo-create.component.css'
})
export class TodoCreateComponent {

  private messageService = inject(MessageService);
  private store = inject(TodoRequestStore);
  private todoArrayStore = inject(TodoArrayStore);
  private todoService = inject(TodoService);

  get todoRequest() { return this.store.todoRequest; }
  get estados() { return Object.values(Estado).filter(v => typeof v === 'number') as Estado[]; }

  onSubmit(){
    if(this.todoRequest.id === undefined)
    {
      this.todoService.create(this.todoRequest).subscribe(
        _ => {
          this.messageService.add({severity: 'success', summary: 'Exito', detail: 'Todo Creado', life: 5000 });
          this.todoService.index().subscribe(r => this.todoArrayStore.set(r))
        }
      );
    }
    else
    {
      this.todoService.update(this.todoRequest, this.todoRequest.id).subscribe(
        _ => {
          this.messageService.add({severity: 'success', summary: 'Exito', detail: 'Todo Actualizado', life: 5000 });
          this.todoService.index().subscribe(r => this.todoArrayStore.set(r));
          this.cancel();
        }
      );
    }
  }

  cancel(){
    this.store.reset();
  }
}
