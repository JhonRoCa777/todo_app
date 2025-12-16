import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { APP_ROUTES } from '../app-routing.module';

export const AuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.verify().pipe(
    map(() => true),
    catchError(() => {
      router.navigate(['/', APP_ROUTES.AUTH]);
      return of(false);
    })
  );
};
