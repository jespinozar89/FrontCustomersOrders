import { Component, EventEmitter, Output } from '@angular/core';
import { Customer } from 'src/app/core/models/customer.model';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  selector: 'app-customer-list-by-name',
  templateUrl: './customer-list-by-name.component.html',
  styleUrls: ['./customer-list-by-name.component.css']
})
export class CustomerListByNameComponent {

  customerName: string = ''; // Variable para almacenar el nombre ingresado
  @Output() searchResult = new EventEmitter<Customer | null>();   // Almacena la respuesta de la API
  noData: boolean = false;

  constructor(private customerService: CustomerService) { }

  searchCustomer(): void {
    if (!this.customerName.trim()) {
      console.warn('Debes ingresar un nombre válido.');
      return;
    }

    this.customerService.getCustomerByName(this.customerName).subscribe({
      next: (data) => {
        console.log('Cliente encontrado:', data);
        this.searchResult.emit(data); // Guardamos los datos del cliente
         this.noData = false;
      },
      error: (err) => {
        console.error('Error al buscar cliente:', err);
         this.noData = true;
      }
    });
  }

  clearSearch(): void {
    this.customerName = '';
     this.noData = false;
    this.searchResult.emit(null); // Emitimos null para limpiar el resultado
  }
}
