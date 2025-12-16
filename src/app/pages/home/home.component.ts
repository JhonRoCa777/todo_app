import { Component, inject } from '@angular/core';
import { HOME_ROUTES } from './home-routing.module';
import { APP_ROUTES } from '../../app-routing.module';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  private router = inject(Router);
  private authService = inject(AuthService);
  
  get APP_ROUTES() {
    return APP_ROUTES;
  }
  get HOME_ROUTES() {
    return HOME_ROUTES;
  }

  send() {
    this.authService.logout().subscribe(
      response => this.router.navigate([APP_ROUTES.AUTH])
    );
  }
}
