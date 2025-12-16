import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { UserLogin } from '../../../../models/User';
import { APP_ROUTES } from '../../../../app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);

  formLogin = this.fb.group({
    'email': ['', [Validators.required, Validators.maxLength(255), Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]]
  });

  get email(){ return this.formLogin.get('email') as FormControl; }
  get password(){ return this.formLogin.get('password') as FormControl; }

  send(){
    this.authService.login(this.formLogin.value as UserLogin).subscribe(
      response => this.router.navigate([APP_ROUTES.HOME])
    );
  }
}
