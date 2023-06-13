import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import {LoginService} from 'src/app/services/login.service';

@Component({
  selector: 'app-reiniciar-password',
  templateUrl: './reiniciar-password.component.html',
  styleUrls: ['./reiniciar-password.component.css']
})
export class ReiniciarPasswordComponent implements OnInit {

  @Output() valueChanged = new EventEmitter<boolean>();

  error = {
    err: null
  }
  u =
    {
      email: ''
    }
  
    
  resetForm: FormGroup = new FormGroup({});
  ventana_confirmacion: boolean =  false;

  constructor(
    private fc: FormBuilder,
    private router: Router,
    private loginservice:LoginService,
  ) { }

  ngOnInit(): void {

    this.resetForm = this.fc.group({
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    });
  }

  public resetPassword(resetForm: any){
    this.u.email=resetForm.value.email
    this.loginservice.resetPassword(this.u)
      .subscribe(
        res=>{
          this.sendEmail(res.data)
          this.router.navigate(['/login/verificar'])},
        err =>{console.log(err)
        this.error.err = err.error.error
        }
      )
  }


  desaparecer_formulario(){
    this.ventana_confirmacion = true;
  }

  refresh(){
    this.valueChanged.emit(false);
  }

  public sendEmail(templateParams:any) {
    emailjs.send('service_i7ogkjb', 'template_ht6005a', templateParams, '57R9WqqxCMT-Xl-UA')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }


}
