import { Component } from '@angular/core';
import { Customer } from 'src/app/core/models/customer.model';
import { CustomerService } from 'src/app/core/services/customer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerModalComponent } from '../../components/customer-modal/customer-modal.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

   customers: Customer[] = [];

  constructor(
    private customerService: CustomerService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe({
      next: (data: Customer[]) => {
        this.customers = data;
      },
      error: (error) => {
        console.error('Error al obtener clientes', error);
      }
    });
  }

  handleSearch(searchData: Customer | null): void {
    if (searchData) {
      this.customers = [searchData];
    } else {
      this.loadCustomers();
    }
  }



  openCustomerModal(customer?: Customer): void {
    // Abre el modal usando el componente CustomerModalComponent
    const modalRef = this.modalService.open(CustomerModalComponent, { backdrop: 'static', size: 'lg' });

    // Configura el título según si es creación o edición
    modalRef.componentInstance.title = customer ? 'Editar Cliente' : 'Crear Cliente';

    // Pasa el cliente al modal (en modo edición) o null (en modo creación)
    modalRef.componentInstance.customer = customer || null;

    modalRef.componentInstance.cancel.subscribe(() => {
      this.loadCustomers();
      modalRef.dismiss();
    });
  }


}
