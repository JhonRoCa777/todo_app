import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { UserCredentialsDTO } from '../../../../models/User/UserCredentialsDTO';
import { LocalstorageService } from '../../../../utils/localstorage.service';
import { Router } from '@angular/router';
import { ROUTES_PATH } from '../../../../constants/routesPath';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor (private fb: FormBuilder,
    private userService: UserService, private localstorageService: LocalstorageService,
    private router: Router){}

  formLogin = this.fb.group({
    'email': ['', [Validators.required, Validators.email, Validators.maxLength(60)]],
    'password': ['', [Validators.required, Validators.minLength(7), Validators.maxLength(30)]]
  });

  get email(){ return this.formLogin.get('email') as FormControl; }
  get password(){ return this.formLogin.get('password') as FormControl; }

  send(){
    this.userService.login(this.formLogin.value as UserCredentialsDTO).subscribe(
      response => {
        if(response.status != "200") alert(response.message[0]);
        else {
          this.localstorageService.setItem(response.data);
          this.router.navigate([ROUTES_PATH.todo]);
          alert(response.message[0]);
        }
      },
      error => {
        alert("ERROR")
    });
  }
}
