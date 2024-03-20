import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { LocalstorageService } from '../../../../utils/localstorage.service';
import { Router } from '@angular/router';
import { UserRegisterDTO } from '../../../../models/User/UserRegisterDTO';
import { ROUTES_PATH } from '../../../../constants/routesPath';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor (private fb: FormBuilder,
    private userService: UserService, private localstorageService: LocalstorageService,
    private router: Router){}

    formRegister = this.fb.group({
      'names': ['', [Validators.required, Validators.maxLength(30)]],
      'lastNames': ['', [Validators.required, Validators.maxLength(30)]],
      'email': ['', [Validators.required, Validators.email, Validators.maxLength(60)]],
      'password': ['', [Validators.required, Validators.minLength(7), Validators.maxLength(30)]],
      'role': ['CLIENT', [Validators.required, Validators.maxLength(10)]]
    });

    get names(){ return this.formRegister.get('names') as FormControl; }
    get lastNames(){ return this.formRegister.get('lastNames') as FormControl; }
    get email(){ return this.formRegister.get('email') as FormControl; }
    get password(){ return this.formRegister.get('password') as FormControl; }

    send(){
      this.userService.register(this.formRegister.value as UserRegisterDTO).subscribe(
        response => {
          if(response.status != "200") alert(response.message[0]);
          else {
            this.formRegister.reset();
            alert("Ya puedes iniciar sesion");
          }
        },
        error => {
          alert("ERROR")
      });
    }
}
