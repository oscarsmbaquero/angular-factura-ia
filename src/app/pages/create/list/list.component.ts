import { Component, OnInit } from '@angular/core';
import { FacturasService } from 'src/app/core/services/cars/facturas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  facturas! : any[]

  constructor(
    private facturasService: FacturasService
  ){

  }

  ngOnInit(): void {
    this.facturasService.getfacturas().subscribe((element)=>{
      this.facturas = element;
      console.log(this.facturas);
            
    })
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
   formatDate(dateString: any) {
    const date = new Date(dateString);
    
    // Extrae el día, mes y año
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
    const year = date.getFullYear();
  
    // Retorna la fecha en formato dd/mm/yyyy
    return `${day}/${month}/${year}`;
  }



}
