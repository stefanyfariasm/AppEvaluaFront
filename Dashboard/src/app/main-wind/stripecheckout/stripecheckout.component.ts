import {
  Component,
  Input,
  OnInit,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  StripeService,
  StripeCardComponent,
  StripeCardNumberComponent,
} from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
} from '@stripe/stripe-js';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StripePaymentsService } from 'src/app/services/stripe-payments.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stripecheckout',
  templateUrl: './stripecheckout.component.html',
  styleUrls: ['./stripecheckout.component.css'],
})
export class StripecheckoutComponent implements OnInit {
  @Input() typePlan: string = '';
  @Input() typeSub: string = '';
  @Input() price: string = '';

  modal?: BsModalRef;

  // private user: any = JSON.parse(window.localStorage.getItem('user') || "{}");
  private correo: any = window.localStorage.getItem('correo') || '{}';
  private usuario: any = window.localStorage.getItem('usuario') || '{}';

  @ViewChild(StripeCardComponent) card: StripeCardComponent | undefined;

  @ViewChild('templateSuccessUpLoad') templateSuccess: any;
  @ViewChild('templateErrorBilling') templateError: any;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };

  // cardNumber: any;
  // cardCvv: any;
  // cardExp: any;
  // form: FormGroup = new FormGroup({});
  // id!: string;
  // orderData!: any;
  //private fb: FormBuilder, private route: ActivatedRoute

  constructor(
    private stripePayments: StripePaymentsService,
    private stripeService: StripeService,
    private modalService: BsModalService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  openModalConfirmationPayment(template: TemplateRef<any>): void {
    this.modal = this.modalService.show(template, {
      class: 'modal-lg modal-dialog-centered',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  onPay(): void {
    this.stripeService
      .createPaymentMethod({
        type: 'card',
        card: this.card?.element || { token: 'PUT_TOKEN_HERE' },
        billing_details: { name: this.usuario, email: this.correo },
      })
      .subscribe(
        (result): any => {
          if (result.paymentMethod) {
            const data = {
              paymentMethod: result.paymentMethod,
              email: this.correo,
              typePlan: this.typePlan,
              typeSub: this.typeSub,
            };
            this.stripePayments.StartSubscription(data).subscribe(
              (res: any) => {
                this.openModalConfirmationPayment(this.templateSuccess);
                this.router.navigate(['/dashboard/usuario/miperfil'])
              },
              (err) => {
                this.openModalConfirmationPayment(this.templateError);
              }
            );
          } else if (result.error) {
            console.log(result.error.message);
            alert(result.error.message);
            return;
          }
        },
        (err) => {
          this.openModalConfirmationPayment(this.templateError);
        }
      );
  }
}
