import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-codigo-verificacion',
  templateUrl: './codigo-verificacion.component.html',
  styleUrls: ['./codigo-verificacion.component.css']
})
export class CodigoVerificacionComponent implements OnInit {

  @Output() valueChanged = new EventEmitter<boolean>();
  error = {
    err: null
  }
  u =
    {
      email: localStorage.getItem("email")?.toString()
    }

  verificationCodeForm: FormGroup = new FormGroup({});
  flag: boolean = true;

  constructor(
    private fc: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private loginservice: LoginService
  ) {
   }

  ngOnInit(): void {
    this.verificationCodeForm= this.fc.group({
      codigo: [null, [Validators.required, Validators.minLength(4)]],
    });

  }
  public resetPassword(Form: any){
    var u={
      correo: localStorage.getItem("email")?.toString(),
      token_google: Form.value.codigo.toString()
    }
    console.log(u.correo)
    this.loginservice.verification_code(u)
      .subscribe(
        res=>{
          this.router.navigate(['/login/new-password'])},
        err =>{
          console.log(err)
          this.error.err = err.error.error
        }
      )
  }
  cambiarValor(valor: boolean) {
    this.valueChanged.emit(true);
  }

}