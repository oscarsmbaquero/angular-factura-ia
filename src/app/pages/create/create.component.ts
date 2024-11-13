import { ICar } from './../../core/services/models/cars-models';
// import { TypeOfCar } from './../../core/services/models/cars-models';
import { Router } from '@angular/router';

import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { trigger, transition, style, animate } from '@angular/animations';
import { CarsService } from 'src/app/core/services/cars/cars.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as AOS from 'aos';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  animations: [
    trigger('transitionMessages', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class CreateComponent {
  navigator: any;

  loading:boolean = false;
  // Incialización del formulario
  public registerCar: FormGroup;
  // variable submitted a false
  public submitted: boolean = false;

  selectedFile: File | null = null;

  // Inicializamos FormBuilder en el constructor
  constructor(
    private formBuilder: FormBuilder,
    private carsservice: CarsService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    // Nuestro formulario - sin campos por defecto
    // Podemos meter valores por defecto en las comillas
    this.registerCar = this.formBuilder.group({
      // marca: ['', [Validators.required, Validators.maxLength(28)]],
      // modelo: ['', [Validators.required, Validators.maxLength(20)]],
      // anio: ['', [Validators.required, Validators.maxLength(4)]],
      // tipo: ['', [Validators.required]],
      imagen: ['',[Validators.required]],
    });
  }

  ngOnInit() {
    AOS.init({
      duration: 1550,
      delay: 550,
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file, 61);
    this.registerCar.get('imagen')?.setValue(file);
  }

  //Función accionada al clickar en submit
  public onSubmit(): void {
    // El usuario ha pulsado en submit->cambia a true submitted
    this.submitted = true;
    // Si el formulario es valido
    if (this.registerCar.valid) {
      // Creamos un Usuario y lo emitimos
      const car: ICar = {
        imagen: this.registerCar.get('imagen')?.value,
      };
      this.loading= true;
      this.carsservice.addCars(car).subscribe(
        (response) => {
          console.log('Datos enviados con éxito');
          this.loading = false;
          this.snackBar.open(
            'El coche ha sido añadido correctamente',
            'Cerrar',
            {
              duration: 3000,
            }
          );
          this.router.navigate(['list']);
        },
        (error) => {
          console.error('Error al enviar los datos', error);
        }
      );
    }
  }
}
