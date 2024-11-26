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
import { FacturasService } from 'src/app/core/services/cars/facturas.service';
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

  nameArchivo = '';

  selectedFile: File | null = null;

  // Inicializamos FormBuilder en el constructor
  constructor(
    private formBuilder: FormBuilder,
    private facturasService: FacturasService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    // Nuestro formulario - sin campos por defecto
    // Podemos meter valores por defecto en las comillas
    this.registerCar = this.formBuilder.group({
      // marca: ['', [Validators.required, Validators.maxLength(28)]],
      // modelo: ['', [Validators.required, Validators.maxLength(20)]],
      // anio: ['', [Validators.required, Validators.maxLength(4)]],
      tipo: ['', [Validators.required]],
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
    console.log(event);
    
    const file: File = event.target.files[0];
    this.nameArchivo = file.name;
    console.log(file.name);
    
    this.registerCar.get('imagen')?.setValue(file);
    
  }

  //Función accionada al clickar en submit
  // public onSubmit(): void {    
  //   // El usuario ha pulsado en submit->cambia a true submitted
  //   this.submitted = true;
  //   // Si el formulario es valido
  //   if (this.registerCar.valid) {
  //     // Creamos un Usuario y lo emitimos
  //     const factura: ICar = {
  //       imagen: this.registerCar.get('imagen')?.value,
  //     };      
  //     this.loading= true;
  //     this.facturasService.addCars(factura).subscribe(
  //       (response) => {
  //         console.log('Datos enviados con éxito');
  //         this.loading = false;
  //         this.snackBar.open(
  //           'El coche ha sido añadido correctamente',
  //           'Cerrar',
  //           {
  //             duration: 3000,
  //           }
  //         );
  //         this.router.navigate(['list']);
  //       },
  //       (error) => {
  //         console.error('Error al enviar los datos', error);
  //       }
  //     );
  //   }
  // }
  public onSubmit(): void {    
    // El usuario ha pulsado en submit -> cambia a true submitted
    this.submitted = true;

    // Si el formulario es válido
    if (this.registerCar.valid) {
        // Obtener el archivo de imagen y el tipo
        const imagen: File = this.registerCar.get('imagen')?.value;
        const tipo = this.registerCar.get('tipo')?.value;

        // Si tenemos un archivo
        if (imagen) {
            // Extraer el nombre del archivo y su extensión
            const extension = imagen.name.split('.').pop(); // Extraer la extensión del archivo
            const nombreSinExtension = imagen.name.substring(0, imagen.name.lastIndexOf('.')); // Nombre sin la extensión

            // Crear el nuevo nombre del archivo, añadiendo el tipo
            const nuevoNombre = `${tipo}-${nombreSinExtension}.${extension}`;

            // Crear un nuevo objeto File con el nombre modificado (pero manteniendo el contenido)
            const nuevoArchivo = new File([imagen], nuevoNombre, { type: imagen.type });

            // Crear el objeto que se va a enviar
            const factura: any = {
                imagen: nuevoArchivo,  // Enviar el archivo con el nuevo nombre
            };

            this.loading = true;

            // Llamar al servicio para añadir el coche
            this.facturasService.addCars(factura).subscribe(
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
        } else {
            console.error('No se ha seleccionado una imagen válida');
        }
    }
}

  onInputChange() {
    // Obtén los valores actuales de 'price' e 'iva'
    const tipo = this.registerCar.get('tipo')?.value;
    // const ivaString = this.anadirGasto.get('iva')?.value;
    // const iva = parseFloat(ivaString);
    // if (price !== null && iva !== null && typeof price === 'number' && typeof iva === 'number') {
    //   // Calcula el importe total
    //   const importeTotal = (price + (price * iva / 100)).toFixed(2);
    //   this.importeTotalPlaceholder = importeTotal.toString();

    //   this.anadirGasto.patchValue({ priceFinal: importeTotal });
    // } else {
    //   // Si alguno de los campos está vacío, reinicia el placeholder
    //   this.importeTotalPlaceholder = '';
    // }
  }
}
