import { Component } from '@angular/core';
import { Customer } from 'src/app/core/models/customer.model';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {

  // Inicializamos el formulario con valores vacíos.
  customerForm: Customer = {
    id: 0,         // El id puede ser generado por la base de datos, en ocasiones no es necesario enviarlo.
    nombre: '',
    correo: ''
  };

  noDataWarn: boolean = false;
  noDataSuccess: boolean = false;
  menssage: string = '';

  private emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  constructor(private customerService: CustomerService) { }

  // Método que se llama al presionar el botón "Guardar"
  saveCustomer(): void {
    // Reseteamos el mensaje de advertencia al iniciar el guardado.
    this.menssage = '';
    this.noDataWarn = false;
    this.noDataSuccess = false;

    // Validación simple: que los campos no estén vacíos.
    if (!this.customerForm.nombre.trim() || !this.customerForm.correo.trim()) {
      console.warn('Completa ambos campos del formulario.');
      this.menssage = 'Completa ambos campos del formulario.';
      this.noDataWarn = true;
      return;
    }

    if (!this.emailRegex.test(this.customerForm.correo.trim())) {
      console.warn('Correo inválido!.');
      this.menssage = 'Correo inválido!.';
      this.noDataWarn = true;
      return;
    }

    this.customerService.createCustomer(this.customerForm).subscribe({
      next: (data: Customer) => {
        console.log('Cliente creado:', data);
        this.menssage = 'Cliente creado exitosamente.';
        this.noDataSuccess = true;
        // Opcional: puedes reiniciar el formulario o notificar al usuario.
        this.customerForm = { id: 0, nombre: '', correo: '' };
      },
      error: (err) => {
        console.error('Error al crear cliente:', err);
        this.menssage = 'Error al crear cliente. Por favor, inténtalo de nuevo.';
        this.noDataWarn = true;
      }
    });
  }
}
