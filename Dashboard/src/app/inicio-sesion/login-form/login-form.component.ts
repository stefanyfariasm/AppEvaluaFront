import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from 'src/app/services/login.service';

declare var google:any

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit, AfterViewInit {

  @Output() valueChanged = new EventEmitter<boolean>();

  u =
    {
      email: '',
      password: ''
    }

  form: FormGroup = new FormGroup({});
  flag: boolean = true;

  res: any;
  error = {
    err: null
  }


  constructor(
    private fc: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private loginservice:LoginService,

  ) {
   }

  ngOnInit(): void {
    this.form = this.fc.group({
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: [null, [Validators.required, Validators.minLength(5)]],
    });
    if(localStorage.getItem("log")){
      let token = localStorage.getItem("log") as string
      let user = this.decodificarJwt(token);
      //localStorage.setItem("usuario",user.email)
      let data = {
        token: token,
        user: user
      }
      this.loginservice.logoogle(data)
      .subscribe(
        res=>{console.log(res)
          this.router.navigate(['/dashboard'])},
        err =>console.log(err)
      )
    }

  }

  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: "1073774487806-759tdp8njcndpdl6fghursjtekp7lo4s.apps.googleusercontent.com",
      callback: this.handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }

  private decodificarJwt(token:string):any
  {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);

  }

  handleCredentialResponse(response:any) {
    if(response.credential){
      localStorage.setItem("log",response.credential);
      window.location.reload();
    }
  }

  logIn(form:any){
    this.u.email=form.value.email
    this.u.password=form.value.password

    this.loginservice.logIn(this.u)
      .subscribe(
        res=>{console.log(res)
          this.router.navigate(['/dashboard'])},
        err =>{console.log(err)
        this.error.err = err.error.error}
      )
  }

  cambiarValor(valor: boolean) {
    this.valueChanged.emit(true);
  }
}