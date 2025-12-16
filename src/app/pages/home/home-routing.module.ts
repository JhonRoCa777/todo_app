import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { TodoComponent } from '../todo/todo.component';
import { StatisticsComponent } from '../statistics/statistics.component';

export const HOME_ROUTES = {
  TODOS: 'gestion',
}

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: StatisticsComponent },
      { path: HOME_ROUTES.TODOS, component: TodoComponent },
      { path: '', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
