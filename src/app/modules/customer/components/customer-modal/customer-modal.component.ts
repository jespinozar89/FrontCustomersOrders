import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from 'src/app/core/models/customer.model';

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.css']
})
export class CustomerModalComponent {

  @Input() title: string = 'Crear Cliente';
  @Input() customer: Customer | null = null;

  @Output() saveSuccess = new EventEmitter<Customer>();
  @Output() cancel = new EventEmitter<void>();

  onCancel(): void {
    this.cancel.emit();
  }
}
