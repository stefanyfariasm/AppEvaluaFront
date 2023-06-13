import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  flag: boolean = true;
  reiniciar_password: boolean =  false;
  login_form: boolean = true;

  isScreenSmall: boolean = false;

  @HostListener('window:resize')
  onResize() {
    this.isScreenSmall = window.innerWidth < 1000;
  }





  distintas_apps = [
    {
      nombre: 'Solinal Etiqueta',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      link: 'https://www.solinalfoodschool.org/'
    },

    {
      nombre: 'Solinal Etiqueta',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      link: 'https://www.solinalfoodschool.org/'
    },

    {
      nombre: 'Solinal Etiqueta',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      link: 'https://www.solinalfoodschool.org/'
    },

    {
      nombre: 'Solinal Etiqueta',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      link: 'https://www.solinalfoodschool.org/'
    }
  ]

  constructor(
    private fc: FormBuilder, 
    private http: HttpClient
  ) {
   }

  ngOnInit(): void {
    this.form = this.fc.group({
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: [null, [Validators.required, Validators.minLength(5)]],
    });
  
  }

  loginAdmin(form: any){
    console.log(form.value);
    

  }

  onValueChanged(newValue: any) {
    this.reiniciar_password = newValue;
    this.login_form = !newValue;
  }

  onValueChanged1(newValue: any){
    this.reiniciar_password = newValue;
    this.login_form = !newValue;

  }

}
