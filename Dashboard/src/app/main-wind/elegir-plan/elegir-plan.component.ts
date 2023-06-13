import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import { planInfoData } from './plan-info-data';
import { LoginService } from 'src/app/services/login.service';
import { BillingService } from 'src/app/services/billing.service';
@Component({
  selector: 'app-elegir-plan',
  templateUrl: './elegir-plan.component.html',
  styleUrls: ['./elegir-plan.component.css']
})
export class ElegirPlanComponent implements OnInit {

  typePlan: string = "Gratis";
  @Input() onChangeTab: FormControl = new FormControl(0);
  planData: any = [];
  private invoice: any = {};
  message: string = "";

  constructor(private authService: LoginService, private billingService: BillingService) {}

  ngOnInit(): void {
    let data = {
      correo: localStorage.getItem('correo')
    }
    // this.authService.getUserAuth(data).subscribe((res: any) => {
    //   // console.log(res);
    //   this.typePlan = res.id_tipousuario_tipousuario.plan.toUpperCase();
    //   this.planData = planInfoData[this.typePlan];
    // })
    this.billingService.getInvoiceByUser(data).subscribe((res: any) => {
      console.log(res);
      this.invoice = res;
    })
  }

  elegirPlan(): void {
    this.onChangeTab.setValue(0);
  }

}
