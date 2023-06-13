import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private URL_API = `${environment.api}/users`;
  private URL_API_PAYMENT = `${environment.api}/payment`;

  constructor(private http: HttpClient) { }

  getDataUserBilling(data: any): any {
    return this.http.post(`${this.URL_API}/info_data`, data);
  }

  updateDataUserBilling(data: any): any {
    return this.http.put(`${this.URL_API}/info_data`, data);
  }

  getInvoiceByUser(data: any): any {
    return this.http.post(`${this.URL_API_PAYMENT}/invoices`, data);
  }

}
