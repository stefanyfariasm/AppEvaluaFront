import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderDetails } from 'src/app/interfaces/order-details';
import { BillingService } from 'src/app/services/billing.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-datos-facturacion',
  templateUrl: './datos-facturacion.component.html',
  styleUrls: ['./datos-facturacion.component.css']
})
export class DatosFacturacionComponent implements OnInit {

  @ViewChild('templateSuccessUpLoad') templateSuccess: any;
  @ViewChild('templateErrorBilling') templateError: any;
  @Input() dataUser: any = {};
  @Input() onChangeTab: FormControl = new FormControl(0);
  form: FormGroup = new FormGroup({});
  dataOrderDetail: OrderDetails = {
    id_detalle_orden: -1,
    id_usuario: -1,
    empresa: '',
    direccion: '',
    cuidad: '',
    cedula: '',
    correo: '',
    usuario_detalles_orden: {
      id_usuario: -1,
      nombres: '',
      apellidos: '',
      correo: '',
      celular: '',
      url_photo: '',
    },
  }
  modalRef?: BsModalRef;
  private userEmail: string = localStorage.getItem("correo") as string;
  
  constructor(private billingService: BillingService, private fc: FormBuilder, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.form = this.fc.group({
      nombres: new FormControl(this.dataOrderDetail.usuario_detalles_orden?.nombres || localStorage.getItem("usuario"), Validators.required),
      apellidos: new FormControl(this.dataOrderDetail.usuario_detalles_orden?.apellidos || localStorage.getItem("apellido"), Validators.required),
      direccion: new FormControl(this.dataOrderDetail?.direccion || '', Validators.required),
      cuidad: new FormControl(this.dataOrderDetail?.cuidad || '', Validators.required),
      empresa: new FormControl(this.dataOrderDetail?.empresa || '', Validators.required),
      telefono: new FormControl(this.dataOrderDetail?.usuario_detalles_orden?.celular || localStorage.getItem("celular"), Validators.required),
      email: new FormControl(this.dataOrderDetail?.usuario_detalles_orden?.correo || localStorage.getItem("correo"), [Validators.required, Validators.email]),
      cedula: new FormControl(this.dataOrderDetail?.cedula, [Validators.required, Validators.maxLength(10)])
    });
    let data = {
      correo: this.userEmail
    }
    this.billingService.getDataUserBilling(data).subscribe((res: any) => {
      let dataRes = res;
      let data = {
        ...dataRes,
        email: dataRes.correo
      }
      this.form.patchValue(data);
      let {nombres, apellidos, empresa, direccion, correo, cedula} = data;
      localStorage.setItem("dataUser", JSON.stringify({nombres, apellidos, empresa, direccion, correo, cedula}));
    }, (err: any) => {
      return;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-lg modal-dialog-centered',
      ignoreBackdropClick: true,
      keyboard: false
    });
  }

  saveBillingData(): void {
    let data = {
      ...this.form.getRawValue(),
      correo: this.userEmail
    }
    this.billingService.updateDataUserBilling(data).subscribe((res: any) => {
      this.dataOrderDetail = res as OrderDetails;
      this.openModal(this.templateSuccess);
    }, (err: any) => {
      this.openModal(this.templateError);
    })
  }

  nextTab(): void {
    this.onChangeTab.setValue(3);
  }

  onSuccessUpdateData() {
    this.modalRef?.hide();
    this.nextTab();
  }

}
