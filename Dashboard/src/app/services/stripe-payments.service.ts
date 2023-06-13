import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StripePaymentsService {

  constructor(private httpClient: HttpClient) { }

  StartSubscription(data: any) {
    return this.httpClient.post(`${environment.api}/payment/checkout`, data);
  }

  cancelSubscription(data: any) {
    return this.httpClient.delete(`${environment.api}/payment/cancel`, data);
  }
}
