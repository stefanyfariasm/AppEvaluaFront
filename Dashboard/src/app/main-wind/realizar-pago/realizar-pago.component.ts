import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-realizar-pago',
  templateUrl: './realizar-pago.component.html',
  styleUrls: ['./realizar-pago.component.css']
})
export class RealizarPagoComponent implements OnInit {

  @Input() price: string = "15";
  @Input() typeSub: string = "mensual";
  @Input() typePlan: string = "EMPRENDEDOR";
  @Input() dataUser: any = {};
  @Input() onChangeTab: FormControl = new FormControl(0);

  constructor() {
    this.dataUser = JSON.parse(localStorage.getItem('dataUser') || '{}');
  }

  ngOnInit() {}

  toGoTab(value: number): void {
    this.onChangeTab.setValue(value);
  }

  onPay() {
    this.toGoTab(4);
  }
}
