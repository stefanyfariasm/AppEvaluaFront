import { Component, OnInit } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';
import {prueba} from './script.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  u ={
    nombre: localStorage.getItem('usuario'),
  }


  constructor(private shepherdService: ShepherdService) {}

  ngOnInit(): void {
    prueba()
  }

  iniciarRecorrido(){
    this.shepherdService.defaultStepOptions = {
      cancelIcon: {
        enabled: true
      },
      classes: 'class-1 class-2',
      scrollTo: { behavior: 'smooth', block: 'center' }
    };
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
    this.shepherdService.addSteps([{
      title: 'Bienvenido a Solinal',
      text: `Creating a Shepherd tour is easy. too!\
      Just create a \`Tour\` instance, and add as many steps as you want.`,
      buttons: [
        {
          action() {
            return this.back();
          },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action() {
            return this.next();
          },
          text: 'Next'
        }
      ],
      id: 'creating'
    },{
      title: 'Creating a Shepherd Tour',
      text: `Creating a Shepherd tour is easy. too!\
      Just create a \`Tour\` instance, and add as many steps as you want.`,
      attachTo: {
        element: '.sidenav-nav',
        on: 'right'
      },
      buttons: [
        {
          action() {
            return this.back();
          },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action() {
            return this.next();
          },
          text: 'Next'
        }
      ],
      id: 'creating2'
    },{
      title: 'Creating a Shepherd Tour',
      text: `Creating a Shepherd tour is easy. too!\
      Just create a \`Tour\` instance, and add as many steps as you want.`,
      attachTo: {
        element: '.sidenav-link-icon',
        on: 'bottom'
      },
      buttons: [
        {
          action() {
            return this.back();
          },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action() {
            return this.next();
          },
          text: 'Next'
        }
      ],
      id: 'creating3'
    }
  ]);
    this.shepherdService.start();
  }

}
