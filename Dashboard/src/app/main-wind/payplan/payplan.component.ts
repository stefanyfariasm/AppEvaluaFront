import { Component, OnInit,TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
import {FormControl} from '@angular/forms';
import { planData } from './plan-data';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-payplan',
  templateUrl: './payplan.component.html',
  styleUrls: ['./payplan.component.css'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class PayplanComponent implements OnInit {
  modalRef?: BsModalRef;
  isStripe: boolean = false;
  isChecked: boolean = false;
  typeSub: "month" | "year" = "year";
  typePlan: string = "GRATIS";
  price: number = 0;
  selectIndexTab: FormControl = new FormControl(0);
  dataUser: any = {};

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onChangeStripe() {
    this.isStripe = !this.isStripe;
  }

  onChangeTypeSub(value: any) {
    this.typeSub = value;
  }

  onChangeTypePlan(name: string) {
    let data = this.getPlanData(name);
    this.typePlan = data.plan;
    this.price = this.typeSub == "year" ? data.price * 12 : data.price
    this.selectIndexTab.setValue(1);
  }

  onChangeIndexTab(e: any): void {
    this.selectIndexTab.setValue(e);
  }

  getPlanData(name: string): any {
    return planData[name];
  }

}