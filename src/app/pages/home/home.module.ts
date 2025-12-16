import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { TodoComponent } from '../todo/todo.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { HomeComponent } from './home.component';
import { EstadoEnumTextPipe } from '../../pipes/estado-enum-text.pipe';
import { FormsModule } from '@angular/forms';
import { TodoCreateComponent } from '../todo/components/todo-create/todo-create.component';

@NgModule({
  declarations: [
    EstadoEnumTextPipe,
    HomeComponent,
    StatisticsComponent,
    TodoComponent,
    TodoCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class TodoModule { }
