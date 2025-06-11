import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiURL = 'http://localhost:5180/api/Customer';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<any[]>(this.apiURL).pipe(
      map((data) =>
        data.map((item) => ({
          id: item.CUSTOMER_ID,
          nombre: item.FULL_NAME,
          correo: item.EMAIL_ADDRESS
        }))
      )
    );
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<any>(`${this.apiURL}/${id}`).pipe(
      map((item) => ({
        id: item.CUSTOMER_ID,
        nombre: item.FULL_NAME,
        correo: item.EMAIL_ADDRESS
      }))
    );
  }

  getCustomerByName(name: string): Observable<Customer> {
    return this.http.get<any>(`${this.apiURL}/name/${name}`).pipe(
      map((item) => ({
        id: item.CUSTOMER_ID,
        nombre: item.FULL_NAME,
        correo: item.EMAIL_ADDRESS
      }))
    );
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<any>(this.apiURL, {
      FullName: customer.nombre,
      EmailAddress: customer.correo
    }).pipe(
      map((item) => ({
        id: item.CUSTOMER_ID,
        nombre: item.FULL_NAME,
        correo: item.EMAIL_ADDRESS
      }))
    );
  }

}
