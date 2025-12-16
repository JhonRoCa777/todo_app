import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const APP_ROUTES = {
  AUTH: 'login',
  HOME: 'home'
}

const routes: Routes = [
  {
    path: APP_ROUTES.AUTH,
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: APP_ROUTES.HOME,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/home/home.module').then(m => m.TodoModule)
  },
  {
    path: '**',
    redirectTo: APP_ROUTES.AUTH
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
