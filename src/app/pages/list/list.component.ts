import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFactura } from 'src/app/core/models/facturas-model';
import { FacturasService } from 'src/app/core/services/cars/facturas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  
  private facturasSubject: BehaviorSubject<IFactura[]> = new BehaviorSubject<IFactura[]>([]);
  facturas! : any[]
  loading = true;

  constructor(
    private facturasService: FacturasService
  ){

  }

  ngOnInit(): void {
    this.facturasService.getfacturas().subscribe((element)=>{
      this.facturasSubject.next(element);
      this.facturas = element;
      this.loading= false;            
    })
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  seePhoto(url: string) {
    window.location.href = url;
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

  capturarTexto(event: any) {
    //console.log(event);
    
    let textoDigitado = event.target.value;
    this.getFacturasFiltered(textoDigitado);
  }
  private getFacturasFiltered(textoDigitado?: string) {
    if (textoDigitado) {
      console.log(textoDigitado);
      
        // Obtener la lista actual de usuarios del BehaviorSubject
        const currentFacturas = this.facturasSubject.getValue();
        // Filtrar la lista de usuarios
        const filteredUsers = currentFacturas.filter(element => {
            return element.proveedor.toLowerCase().includes(textoDigitado.toLowerCase());
        });

        // Asignar la lista filtrada a this.users
        this.facturas = filteredUsers;
        //console.log(filteredUsers);
    } else {
        // Si no se proporciona texto, asignar la lista completa de usuarios a this.users
        const currentFacturas = this.facturasSubject.getValue();
        this.facturas = currentFacturas;
    }
}


}
