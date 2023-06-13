import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  @Output() valueChanged = new EventEmitter<boolean>();

  u =
    {
      name:'',
      lastname:'',
      cellphone:'',
      email: '',
      password1: '',
      password2: ''
    }

  registerForm: FormGroup = new FormGroup({});
  flag: boolean = true;
  ventana_confirmacion: boolean =  false;
  error={
    err: null
  }

  constructor( private fc: FormBuilder, private router: Router,
    private loginservice:LoginService,private http: HttpClient,) { }

  ngOnInit(): void {
    this.registerForm = this.fc.group({
      name:[null, [Validators.required]],
      lastname:[null, [Validators.required]],
      cellphone:[null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password1: [null, [Validators.required, Validators.minLength(5)]],
      password2: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  loginAdmin(form: any){
    console.log(form.value);

  }

  desaparecer_formulario(){
    this.ventana_confirmacion = true;
  }

  refresh(){
    this.valueChanged.emit(false);
  }

  signUp(registerForm:any){
    this.u.name=registerForm.value.name;
    this.u.lastname=registerForm.value.lastname
    this.u.cellphone=registerForm.value.cellphone
    this.u.email=registerForm.value.email
    this.u.password1=registerForm.value.password1
    this.u.password2=registerForm.value.password2

    console.log(this.u)
    this.loginservice.signUp(this.u)
      .subscribe(
        res=>{console.log(res.post)
        this.router.navigate(['/login'])},
        err =>{console.log(err)
        this.error.err = err.error.error}
      )
}


}
