import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoGroup } from '../../models/Todo';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent implements OnInit {

  private todoService = inject(TodoService);
  todoGroup = signal<TodoGroup[]>([]);
  totalAmount = computed(() =>
    this.todoGroup().reduce((sum, g) => sum + Number(g.amount), 0)
  );

  ngOnInit(): void {
    this.todoService.getGroup().subscribe(r => this.todoGroup.set(r));
  }
}
