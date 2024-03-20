import { CanActivateFn, Router } from '@angular/router';
import { LocalstorageService } from '../utils/localstorage.service';
import { inject } from '@angular/core';
import { ROUTES_PATH } from '../constants/routesPath';

export const authGuard: CanActivateFn = (route, state) => {
  const localstorageService = inject(LocalstorageService);
  const router = inject(Router);

  if(localstorageService.getItem() == null)
  {
    router.navigate([ROUTES_PATH.auth]);
    return false;
  }

  return true;
};
