import { Component } from '@angular/core';
import { IUser } from '../../services/models/user-models';

import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { UsersService } from '../../services/users/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginUser: FormGroup;
  public submitted: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private userServices: UsersService,
    private router: Router,
    
  ) {
    this.loginUser = this.formBuilder.group({
      user: ['', [Validators.required ]],
      password: ['', [Validators.required]],
    });
  }

  public onSubmit(): void {
    // El usuario ha pulsado en submit->cambia a true submitted
    this.submitted = true;
    // Si el formulario es valido
    if (this.loginUser.valid) {
      // Creamos un Usuario y lo emitimos
      const user: any = {
        user: this.loginUser.get('user')?.value,
        password: this.loginUser.get('password')?.value,
      };
      console.log(user, 46);
      this.userServices.login(user).subscribe(
        (response) => {
          this.router.navigate(['list']);
        },
        (error) => {
          console.error('Error al enviar los datos', error);
        }
      );
    }
  } 


}
