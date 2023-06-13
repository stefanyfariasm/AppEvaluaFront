import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  @Output() valueChanged = new EventEmitter<boolean>();

  u =
    {
      email: '',
      password: ''
    }

  newpassform: FormGroup = new FormGroup({});
  flag: boolean = true;

  constructor(
    private fc: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private loginservice: LoginService
  ) {
   }

  ngOnInit(): void {
    this.newpassform = this.fc.group({
      newpass: [null, [Validators.required, Validators.minLength(8)]],
    });

  }
  public resetPassword(Form: any){
    var u={
      correo: localStorage.getItem("email")?.toString(),
      contrasena: Form.value.newpass
    }
    this.loginservice.newPassword(u)
      .subscribe(
        res=>{
          console.log(localStorage.length)
          localStorage.removeItem("email")
          console.log(localStorage.length)
          this.router.navigate(['/login'])},
        err =>console.log(err)
      )
  }
  cambiarValor(valor: boolean) {
    this.valueChanged.emit(true);
  }
}