import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { CustomerListByNameComponent } from './components/customer-list-by-name/customer-list-by-name.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerListByNameComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ]
})
export class CustomerModule { }
